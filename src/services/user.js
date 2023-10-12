import Service from './Service';

class UserService extends Service {

    constructor(repo) {
        super(repo);
    }

    async addUser(user, data) {
        try {
            const { isPresent } = await this.repo.checkIfItExists({ email: data.email });
            if (isPresent) return new this.errorResponse('email already taken.', 403);
            data.password = this.repo.hashPassword(data.password);
            data.registeredBy = user.id;
            await this.repo.insert(data);
        } catch (err) {
            return new this.errorResponse()
        }
    }
    async selfRegistration(data) {
        try {
            const { isPresent } = await this.repo.checkIfItExists({ email: data.email });
            if (isPresent) return new this.errorResponse('email already taken.', 403);
            data.password = this.repo.hashPassword(data.password);
            await this.repo.insert(data);
        } catch (err) {
            return new this.errorResponse()
        }
    }
    async signIn(data) {
        try {
            data.email = data.email.trim();
            const { isPresent, item } = await this.repo.checkIfItExists({ email: data.email });
            if (!isPresent)
                return new this.errorResponse('Incorrect email or password', 400);
            if (item.status != 'Active')
                return new this.errorResponse(item.status + ' Credential, Contact Admin', 402);

            if (item.token && item.role && !item.role.allowMultipleMachineLogin) return new this.errorResponse('You Have Already Logged In Another Machine', 403);
            const match = await this.repo.checkPasswordMatch(data.password, item.password)
            if (match) {
                const token = await this.repo.getUserToken(item);

                await this.repo.update(item._id, { token: token, no_attempts: 0 })

                return new this.successResponse({
                    message: 'User logged in successfully!',
                    access_token: token,
                    email: item.email,
                    photo: item.photo,
                    changePassword: item.passwordFlag ?
                        item.passwordFlag : false,
                    fullname: item.fullname,
                    id: item._id
                })

            } else {
                const no_attempts = item.no_attempts + 1;
                if (no_attempts >= 7) {
                    await this.repo.update(item._id, {
                        no_attempts: no_attempts,
                        status: 'Locked'
                    });
                    return new this.errorResponse('You are Locked due to multiple wrong credential attempts', 400)
                } else {
                    await this.repo.update(item._id, { no_attempts: no_attempts })
                    return new this.errorResponse('Incorrect username or password', 400)
                }
            }
        } catch (err) {
            console.log(err);
            return new this.errorResponse()
        }
    }
};

export default UserService;
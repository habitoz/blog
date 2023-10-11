import UserRepo from '../src/interface/user.js';

export default async () => {
    const data = {
        fullname: 'Aksumay Super Admin',
        email: 'sadmin@aksumay.com',
        password: UserRepo.hashPassword('12'),
        role: 'Super Admin'
    };
    const { isPresent } = await UserRepo.checkIfItExists({ username: data.username });
    if (isPresent) return;
    await UserRepo.insert(data);
}
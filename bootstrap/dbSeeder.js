import UserRepo from '../src/interface/user.js';

export default async () => {
    const data = {
        fullname: 'Aksumay Super Admin',
        email: 'admin@retink.com',
        password: UserRepo.hashPassword('12'),
        role: 'Admin'
    };
    const { isPresent } = await UserRepo.checkIfItExists({ username: data.username });
    if (isPresent) return;
    await UserRepo.insert(data);
}
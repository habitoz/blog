import UserRepo from '../src/interface/user.js';

export default async () => {
    const admin = {
        fullname: 'Retink Super Admin',
        email: 'admin@retink.com',
        password: UserRepo.hashPassword('123456'),
        role: 'Admin'
    };
    const author = {
        fullname: 'Retink Blog Author',
        email: 'author@retink.com',
        password: UserRepo.hashPassword('123456'),
        role: 'Author'
    };

    const { isPresent } = await UserRepo.checkIfItExists({ email: admin.email });
    if (isPresent) return;
    await UserRepo.insert(admin);

    const { isPresent: authorExists } = await UserRepo.checkIfItExists({ email: author.email });
    if (authorExists) return;
    await UserRepo.insert(author);
}
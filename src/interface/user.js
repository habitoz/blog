import BaseRepo from './BaseRepo';
import UserModel from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from 'config';

const User = new UserModel().getInstance();

class UserRepo extends BaseRepo {

    constructor(model) {
        super(model);
    }
    async getAll(query, exclude = '-__v -password') {
        return await super.getAll(query, exclude)
    }
    async checkIfItExists(condition, populate) {
        return await super.checkIfItExists(condition, populate);
    }

    hashPassword(password) {
        return bcrypt.hashSync(password, 8);
    }
    async checkPasswordMatch(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword)
    }
    async getUserToken(user) {

        const payload = {
            id: user._id,
            role: user.role,
            email: user.email
        }
        return jwt.sign(payload, config.get('secret_key'), {
            expiresIn: '12h'
        });
    }
};

export default new UserRepo(User);
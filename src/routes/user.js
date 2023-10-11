import express from 'express';
import User from '../controller/user.js';
import UserSchema from '../validators/Joi/schemas/user.js';
import valMiddleware from '../validators/Joi/middleware.js';

const router = express.Router();

router.get('/', User.getAll);

router.get('/detail/:id', User.get);

router.put('/:id', valMiddleware(UserSchema.updateProfile), User.update);

router.post('/signin', valMiddleware(UserSchema.signin), User.signin);

router.post('/signup', valMiddleware(UserSchema.signup), User.signup);

router.post('/addUser', valMiddleware(UserSchema.addUser), User.addUser);

router.delete('/:id', User.delete);

export default router;
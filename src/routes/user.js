import express from 'express';
import User from '../controller/user.js';
import UserSchema from '../validators/Joi/schemas/user.js';
import valMiddleware from '../validators/Joi/middleware.js';
import user_auth from '../middleware/auth/user_auth.js';

const router = express.Router();

router.get('/', user_auth(['Admin']), User.getAll);

router.get('/detail/:id', user_auth(['Admin']), User.get);

router.put('/:id', valMiddleware(UserSchema.updateProfile), User.update);

router.post('/signin', valMiddleware(UserSchema.signin), User.signin);

router.post('/signup', valMiddleware(UserSchema.signup), User.signup);

router.post('/addUser', user_auth(['Admin']), valMiddleware(UserSchema.addUser), User.addUser);

router.delete('/:id', user_auth(['Admin']), User.delete);

export default router;
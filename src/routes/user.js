import express from 'express';
import User from '../controller/user.js';
import UserSchema from '../validators/Joi/schemas/user.js';
import valMiddleware from '../validators/Joi/middleware.js';
    
const router = express.Router();
    
router.get('/', User.getAll);

router.get('/:id', User.get);

router.put('/:id',valMiddleware(UserSchema.updateUser), User.update);

router.post('/',valMiddleware(UserSchema.addUser), User.insert);

router.delete('/:id', User.delete);

export default router;
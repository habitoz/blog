import express from 'express';
import Comment from '../controller/comment.js';
import CommentSchema from '../validators/Joi/schemas/comment.js';
import valMiddleware from '../validators/Joi/middleware.js';
    
const router = express.Router();
    
router.get('/', Comment.getAll);

router.get('/:id', Comment.get);

router.put('/:id',valMiddleware(CommentSchema.updateComment), Comment.update);

router.post('/',valMiddleware(CommentSchema.addComment), Comment.insert);

router.delete('/:id', Comment.delete);

export default router;
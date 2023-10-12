import express from 'express';
import Comment from '../controller/comment.js';
import CommentSchema from '../validators/Joi/schemas/comment.js';
import valMiddleware from '../validators/Joi/middleware.js';

const router = express.Router();

router.get('/all/:blogId', Comment.getAll);

router.get('/active/:blogId', Comment.getActiveAll);

router.get('/detail/:id', Comment.get);

router.put('/:id', valMiddleware(CommentSchema.updateComment), Comment.updateComment);

router.put('/status/:id', valMiddleware(CommentSchema.statusChange), Comment.updateStatus);

router.post('/:blogId', valMiddleware(CommentSchema.addComment), Comment.addComment);

router.delete('/:id', Comment.delete);

export default router;
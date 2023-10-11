import express from 'express';
import Blog from '../controller/blog.js';
import BlogSchema from '../validators/Joi/schemas/blog.js';
import valMiddleware from '../validators/Joi/middleware.js';
    
const router = express.Router();
    
router.get('/', Blog.getAll);

router.get('/:id', Blog.get);

router.put('/:id',valMiddleware(BlogSchema.updateBlog), Blog.update);

router.post('/',valMiddleware(BlogSchema.addBlog), Blog.insert);

router.delete('/:id', Blog.delete);

export default router;
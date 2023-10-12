import express from 'express';
import Blog from '../controller/blog.js';
import BlogSchema from '../validators/Joi/schemas/blog.js';
import valMiddleware from '../validators/Joi/middleware.js';
import user_auth from '../middleware/auth/user_auth.js';

const router = express.Router();

router.get('/', Blog.getAll);

router.get('/active', Blog.getAllActive);

router.get('/view/:id', Blog.viewBlog);

router.put('/:id', user_auth(['Author']), valMiddleware(BlogSchema.updateBlog), Blog.update);

router.put('/like/:blogId', valMiddleware(BlogSchema.updateBlog), Blog.likeBlog);

router.put('/status/:id', user_auth(['Author', 'Admin']), valMiddleware(BlogSchema.statusChange), Blog.statusChange);

router.post('/', user_auth(['Author']), valMiddleware(BlogSchema.addBlog), Blog.addBlog);

router.delete('/:id', user_auth(['Author', 'Admin']), Blog.delete);

export default router;
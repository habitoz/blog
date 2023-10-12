import Controller from './Controller';
import BlogRepo from '../interface/blog.js';
import BlogService from '../services/blog.js';

const blog_service = new BlogService(BlogRepo);

class BlogController extends Controller {

    constructor(service) {
        super(service);
    }

    async getAllActive(req, res) {
        const response = await blog_service.repo.getAll({ ...req.query, status: "Active" });
        return res.status(response.statusCode).send(response);
    }
    async addBlog(req, res) {
        const response = await blog_service.addBlog(req.user, req.body);
        return res.status(response.statusCode).send(response);
    }
    async statusChange(req, res) {
        const response = await blog_service.changeStatus(req.user, req.body, req.params.id);
        return res.status(response.statusCode).send(response);
    }
    async viewBlog(req, res) {
        const response = await blog_service.viewBlog(req.user, req.params.id);
        return res.status(response.statusCode).send(response);
    }
    async likeBlog(req, res) {
        const response = await blog_service.likeBlog(req.user, req.params.blogId);
        return res.status(response.statusCode).send(response);
    }
};

export default new BlogController(blog_service);
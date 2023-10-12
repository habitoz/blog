import Controller from './Controller';
import CommentRepo from '../interface/comment.js';
import CommentService from '../services/comment.js';

const comment_service = new CommentService(CommentRepo);

class CommentController extends Controller {

    constructor(service) {
        super(service);
    }

    async addComment(req, res) {
        const response = await comment_service.addComment(req.user, req.body, req.params.blogId);
        return res.status(response.statusCode).send(response);
    }
    async getAll(req, res) {
        const response = await comment_service.getAll({ ...req.query, blog: req.params.blogId });
        return res.status(response.statusCode).send(response);
    }
    async getActiveAll(req, res) {
        const response = await comment_service.getActiveAll({ ...req.query, blog: req.params.blogId });
        return res.status(response.statusCode).send(response);
    }
    async updateComment(req, res) {
        const response = await comment_service.updateComment(req.user, req.params.id, req.body);
        return res.status(response.statusCode).send(response);
    }
    async updateStatus(req, res) {
        const response = await comment_service.updateStatus(req.user, req.params.id, req.body);
        return res.status(response.statusCode).send(response);
    }
};

export default new CommentController(comment_service);
import Controller from './Controller';
import CommentRepo from '../interface/comment.js';
import CommentService from '../services/comment.js';
    
const comment_service = new CommentService(CommentRepo);

class CommentController extends Controller {

    constructor(service) {
        super(service);
    }

    //write your logic in here
};

export default new CommentController(comment_service);
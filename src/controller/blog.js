import Controller from './Controller';
import BlogRepo from '../interface/blog.js';
import BlogService from '../services/blog.js';
    
const blog_service = new BlogService(BlogRepo);

class BlogController extends Controller {

    constructor(service) {
        super(service);
    }

    //write your logic in here
};

export default new BlogController(blog_service);
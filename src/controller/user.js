import Controller from './Controller';
import UserRepo from '../interface/user.js';
import UserService from '../services/user.js';
    
const user_service = new UserService(UserRepo);

class UserController extends Controller {

    constructor(service) {
        super(service);
    }

    //write your logic in here
};

export default new UserController(user_service);
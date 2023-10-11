import Controller from './Controller';
import UserRepo from '../interface/user.js';
import UserService from '../services/user.js';

const user_service = new UserService(UserRepo);

class UserController extends Controller {

    constructor(service) {
        super(service);
    }

    async addUser(req, res) {
        const response = await user_service.addUser(req.body);
        return res.status(response.statusCode).send(response);
    }
    async signup(req, res) {
        const response = await user_service.selfRegistration(req.body);
        return res.status(response.statusCode).send(response);
    }
    async signin(req, res) {
        const response = await user_service.signIn(req.body);
        return res.status(response.statusCode).send(response);
    }
};

export default new UserController(user_service);
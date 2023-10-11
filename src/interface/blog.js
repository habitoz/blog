import BaseRepo from './BaseRepo';
import BlogModel from '../models/blog.js';

const Blog = new BlogModel().getInstance();

class BlogRepo extends BaseRepo {

    constructor(model) {
        super(model);
    }

    async getOneByCondition(condition, query = {}, exclude = []) {
        return await super.getOneByCondition(condition, query, exclude);
    }
    async getAll(query, exclude = []) {
        return await super.getAll(query, exclude)
    }
    async checkIfItExists(condition, populate) {
        return await super.checkIfItExists(condition, populate);
    }
};

export default new BlogRepo(Blog);
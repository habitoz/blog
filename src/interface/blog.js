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
    async getAll(query, exclude = ['-__v -updatedAt -likes.users -views.users']) {
        query.populate = [{ path: "author", select: 'fullname photo id' }]
        return await super.getAll(query, '-__v -updatedAt -likes.users -views.users')
    }
    async checkIfItExists(condition, populate) {
        return await super.checkIfItExists(condition, populate);
    }
};

export default new BlogRepo(Blog);
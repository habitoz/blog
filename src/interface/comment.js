import BaseRepo from './BaseRepo';
import CommentModel from '../models/comment.js';

const Comment = new CommentModel().getInstance();

class CommentRepo extends BaseRepo {

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
    async addReplayCount(commentId) {
        return await this.update(commentId, { $inc: { replayCount: 1 } })
    }
};

export default new CommentRepo(Comment);
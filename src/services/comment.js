import Service from './Service';

class CommentService extends Service {

    constructor(repo) {
        super(repo);
    }

    async getAll(query) {
        return await this.repo.getAll(query)
    }
    async getActiveAll(query) {
        return await this.repo.getAll({ ...query, status: 'Active' })
    }
    async addComment(user, data, blogId) {
        try {
            data.blog = blogId;
            if (data.parent) {
                const { isPresent } = await this.repo.checkIfItExists({ _id: data.parent, blog: blogId });
                if (!isPresent) return new this.errorResponse('comment not found.', 404);
                await this.repo.addReplayCount(data.parent);
                data.isReplay = true;
            }
            data.commentedBy = user.id;
            return await this.repo.insert(data);
        } catch (err) {
            return new this.errorResponse()
        }
    }
    async updateComment(user, commentId, data) {
        try {
            const { isPresent } = await this.repo.checkIfItExists({ _id: commentId, commentedBy: user.id });
            if (!isPresent) return new this.errorResponse('comment not found.', 404);
            await this.repo.update(commentId, data);
            return new this.successResponse()
        } catch (err) {
            return new this.errorResponse()
        }
    }
    async updateStatus(user, commentId, data) {
        try {
            const { isPresent, item } = await this.repo.checkIfItExists({ _id: commentId });
            if (!isPresent) return new this.errorResponse('comment not found.', 404);
            if (data.status == item.status) return new this.errorResponse('comment is already ' + data.status, 403)
            const { error } = await this.repo.update(commentId, data.status == 'Inactive' ? {
                status: data.status,
                deactivatedBy: user.id, deactivatedAt: new Date()
            } : { status: data.status });
            return error ? new this.errorResponse() : new this.successResponse()
        } catch (err) {
            return new this.errorResponse()
        }
    }
};

export default CommentService;
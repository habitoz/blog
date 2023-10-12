import Service from './Service';

class BlogService extends Service {

    constructor(repo) {
        super(repo);
    }

    async addBlog(user, data) {
        try {
            data.author = user.id;
            await this.repo.insert(data);
            return new this.successResponse({ message: "blog created" });
        } catch (err) {
            return new this.errorResponse()
        }
    }
    async viewBlog(user, blogId) {
        try {
            const { isPresent, item } = await this.repo.checkIfItExists({ _id: blogId });
            if (!isPresent) return new this.errorResponse("blog not found", 404);
            const userAlredyViewed = item.views?.users.find((userViewed) => String(userViewed) === String(user.id))
            if (!userAlredyViewed) {
                await this.repo.update(blogId, { $inc: { 'views.count': 1 }, $push: { 'views.users': user.id } })
            }
            return new this.successResponse({ item })
        } catch (err) {
            return new this.errorResponse()
        }
    }
    async likeBlog(user, blogId) {
        try {
            const { isPresent, item } = await this.repo.checkIfItExists({ _id: blogId });
            if (!isPresent) return new this.errorResponse("blog not found", 404);
            const userAlredyLiked = item.likes?.users.find((userLiked) => String(userLiked) === String(user.id))
            if (!userAlredyLiked) {
                await this.repo.update(blogId, { $inc: { 'likes.count': 1 }, $push: { 'likes.users': user.id } })
            }
            else return new this.errorResponse("blog alreay liked.", 403)
        } catch (err) {
            return new this.errorResponse()
        }
    }
    async changeStatus(user, data, blogId) {
        try {
            const { isPresent } = await this.repo.checkIfItExists({ _id: blogId });
            if (!isPresent) return new this.errorResponse("blog not found", 404)
            if (data.status === 'Inactive') {
                data.deactivatedBy = user.id;
                data.deactivatedAt = new Date();
            }
            await this.repo.update(blogId, data);
            return new this.successResponse({ message: "blog status changed" })
        } catch (err) {
            return new this.errorResponse()
        }
    }
};

export default BlogService;
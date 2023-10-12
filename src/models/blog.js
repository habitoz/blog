import mongoose, { Schema } from "mongoose";

class BlogModel {
    init() {
        const schema = new Schema({
            author: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
                required: true
            },
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            subTitle: String,
            deactivatedBy: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            deactivatedAt: Date,
            likes: {
                count: {
                    type: Number,
                    default: 0
                },
                users: [
                    {
                        type: mongoose.Types.ObjectId,
                        ref: 'User'
                    }
                ]
            },
            views: {
                count: {
                    type: Number,
                    default: 0
                },
                users: [
                    {
                        type: mongoose.Types.ObjectId,
                        ref: 'User'
                    }
                ]
            },
            status: {
                type: String,
                default: 'Active',
                enum: ['Active', 'Inactive']
            }

        }, {
            timestamps: true,
            id: true,
            toObject: {
                virtuals: true
            },
            toJSON: {
                virtuals: true
            }
        });

        return mongoose.model("Blog", schema);
    }

    getInstance() {
        return mongoose.models['Blog'] || this.init();
    }

}

export default BlogModel;
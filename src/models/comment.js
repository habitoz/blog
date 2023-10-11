import mongoose, { Schema } from "mongoose";

class CommentModel {
    init() {
        const schema = new Schema({

            blog: {
                type: mongoose.Types.ObjectId,
                ref: 'Blog',
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            parent: {
                type: mongoose.Types.ObjectId,
                ref: 'Comment',
            },
            isReplay: {
                type: Boolean,
                default: false
            },
            replayCount: {
                type: Number,
                default: 0
            },
            commentedBy: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
                required: true
            },
            deactivatedBy: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            deactivatedAt: Date,
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

        return mongoose.model("Comment", schema);
    }

    getInstance() {
        return mongoose.models['Comment'] || this.init();
    }

}

export default CommentModel;
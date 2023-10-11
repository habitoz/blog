import mongoose, { Schema } from "mongoose";

class UserModel {
    init() {
        const schema = new Schema({

            fullname: {
                type: String,
                required: true
            },
            role: {
                type: String,
                default: 'Member',
                enum: ['Admin', 'Author', 'Member']
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true
            },
            no_attempts: {
                type: Number,
                default: 0
            },
            token: String,
            photo: Object,
            emailVerified: {
                type: Boolean,
                default: false
            },
            emailVerifiedAt: Date,
            registeredBy: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            status: {
                type: String,
                default: 'Active',
                enum: ['Active', 'Locked', 'Suspended']
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

        return mongoose.model("User", schema);
    }

    getInstance() {
        return mongoose.models['User'] || this.init();
    }

}

export default UserModel;
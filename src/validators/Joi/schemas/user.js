import Joi from 'joi';

const addUser = Joi.object().keys({
    fullname: Joi.string().required(),
    role: Joi.string().required().valid(['Admin', 'Author', 'Member']),
    email: Joi.email().required(),
    password: Joi.string().required(),
});
const signup = Joi.object().keys({
    fullname: Joi.string().required(),
    role: Joi.string().required().valid(['Admin', 'Author', 'Member']),
    email: Joi.email().required(),
    password: Joi.string().required(),
});
const signin = Joi.object().keys({
    email: Joi.email().required(),
    password: Joi.string().required(),
});

const updateProfile = Joi.object().keys({
    fullname: Joi.string(),
    photo: Joi.object()
});

const statusChange = Joi.object().keys({
    status: Joi.string().required().valid(['Active', 'Suspended'])
});

export default {
    addUser,
    updateProfile,
    signup,
    signin,
    statusChange
};
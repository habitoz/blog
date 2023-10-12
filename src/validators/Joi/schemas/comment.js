import Joi from 'joi';

const addComment = Joi.object().keys({
    comment: Joi.string().required(),
    parent: Joi.string()
});

const updateComment = Joi.object().keys({
    comment: Joi.string().required()
});

const statusChange = Joi.object().keys({
    // status: Joi.string().required().valid('Active', 'Inactive')
});

export default {
    addComment,
    updateComment,
    statusChange
};
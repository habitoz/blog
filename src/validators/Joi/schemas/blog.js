import Joi from 'joi';

const addBlog = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    subTitle: Joi.string(),
});

const updateBlog = Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
    subTitle: Joi.string(),
});

const statusChange = Joi.object().keys({
    status: Joi.string().required().valid(['Active', 'Inactive'])
});

export default {
    addBlog,
    updateBlog,
    statusChange
};
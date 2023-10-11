import Joi from 'joi';

const addBlog = Joi.object().keys({
       
});

const updateBlog = Joi.object().keys({
       
});

const statusChange = Joi.object().keys({
       
});

export default {
    addBlog,
    updateBlog,
    statusChange
};
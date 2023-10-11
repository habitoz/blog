import Joi from 'joi';

const addComment = Joi.object().keys({
       
});

const updateComment = Joi.object().keys({
       
});

const statusChange = Joi.object().keys({
       
});

export default {
    addComment,
    updateComment,
    statusChange
};
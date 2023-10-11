import Joi from 'joi';

const addAuthor = Joi.object().keys({
       
});

const updateAuthor = Joi.object().keys({
       
});

const statusChange = Joi.object().keys({
       
});

export default {
    addAuthor,
    updateAuthor,
    statusChange
};
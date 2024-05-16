import Joi from 'joi';

const activateCard = {
  body: Joi.object().keys({
    code: Joi.number().required()
  })
};
export default {
  activateCard
};

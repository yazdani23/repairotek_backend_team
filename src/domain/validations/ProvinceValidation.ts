import Joi from "joi";

const ProvinceValidation = Joi.object({
  code: Joi.number().required(),
  name: Joi.string().required()
});

export default ProvinceValidation;

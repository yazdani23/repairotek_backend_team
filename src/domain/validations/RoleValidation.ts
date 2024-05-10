import Joi from "joi";

const RoleValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  permissions: Joi.array().required(),
});

export default RoleValidationSchema;

import Joi from "joi";

const PermissionValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  resource: Joi.string().required(),
  action: Joi.string().required(),
  roleIds: Joi.array().required(),
});

export default PermissionValidationSchema;

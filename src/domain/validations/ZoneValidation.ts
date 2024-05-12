import Joi from "joi";

const ProjectValidationSchema = Joi.object({
  name: Joi.string().required(),
  state: Joi.string().required(),
  roadWay: Joi.string().required(),
  longitude: Joi.number().required(),
  latitude: Joi.number().required(),
  description: Joi.string().required(),
  provinceId: Joi.string().required()
});

export default ProjectValidationSchema;

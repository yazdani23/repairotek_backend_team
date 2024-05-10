import Joi from "joi";

const ProjectValidationSchema = Joi.object({
  modelName: Joi.string().required(),
  cameraIp: Joi.string().required(),
  cameraSpecification: Joi.string().required()
});

export default ProjectValidationSchema;

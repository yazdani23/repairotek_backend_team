import Joi from "joi";

const ProjectValidationSchema = Joi.object({
  userId: Joi.string().required(),
  zoneId: Joi.string().required()
});

export default ProjectValidationSchema;

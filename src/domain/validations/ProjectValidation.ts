import Joi from "joi";

const ProjectValidationSchema = Joi.object({
  projectCode: Joi.string().required(),
  userZoneId: Joi.string().required(),
  title: Joi.string().required(),
  // zoneId: Joi.string().required(),
  issueDateTime: Joi.date().required(),
  areaLength: Joi.number().required(),
  areaWidth: Joi.number().required(),
  areaHeight: Joi.number().required(),
  measureUnit: Joi.string().required(),
  description: Joi.string().required(),
  longitude: Joi.number().required(),
  latitude: Joi.number().required(),
  status: Joi.string().required(),
});

export default ProjectValidationSchema;

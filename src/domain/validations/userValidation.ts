// import Joi from "joi";

// const userSchema = Joi.object({
//   username: Joi.string().alphanum().min(3).max(30).required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
//   term: Joi.boolean().required(),
// });

// export default userSchema;


import Joi from "joi";
const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
  term: Joi.boolean().required(),
});

module.exports = userSchema;

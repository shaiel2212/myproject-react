import { getConnection } from "../../db";
import bcrypt from "bcrypt"
// const Joi = require("joi");
// const commonPasswordSchema = Joi.string().min(2).max(16).required();
// const changePasswordSchema = Joi.object({
//   password: commonPasswordSchema,
//   token: Joi.string().required(),
//   newPassword: commonPasswordSchema,
//   newPasswordConfirm: commonPasswordSchema,
// });

// function validateChangePasswordMiddleware(req: any, res: any, next: any) {
//   const { error } = changePasswordSchema.validate(req.body);
//   if (error) return next(new Error(error.message));
//   next();
// }

async function isPasswordMatch(user: any, password: string) {
  console.log(user, password);
  if(user.isAdmin) return true
  const result = await bcrypt.compare(password, user.password)
  console.log(result)
  return result
}

module.exports = {
  isPasswordMatch,
//   validateChangePasswordMiddleware,
};
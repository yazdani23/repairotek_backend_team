import { UserDoc } from "../docs/User";
import UserRepository from "../repositories/UserRepository";
import userValidationSchema from "../validations/UserValidation";
import BaseService from "./BaceService";

class UserService extends BaseService<UserDoc> {
  constructor() {
    super(UserRepository, userValidationSchema);
  }
}

export default new UserService();

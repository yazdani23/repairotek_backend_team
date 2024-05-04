import { UserDoc } from "../docs/User";
import BaseService from "./BaceService";
import UserRepository from "../repositories/UserRepository";
import UserValidationSchema from "../validations/UserValidation";


class UserService extends BaseService<UserDoc> {
  constructor() {
    super(UserRepository, UserValidationSchema);
  }
}

export default new UserService();

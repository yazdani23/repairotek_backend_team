import UserModel from "../models/UserModel";
import { UserDoc } from "../docs/User";
import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository<UserDoc> {
  constructor() {
    super(UserModel);
  }
}

export default new UserRepository();


import { AdminDoc } from "../docs/Admin";
import AdminModel from "../models/AdminModel";
import BaseRepository from "./BaseRepository";

class AdminRepository extends BaseRepository<AdminDoc> {
  constructor(){
    super(AdminModel)
  }
}

export default new AdminRepository();

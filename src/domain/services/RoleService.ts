import { RoleDoc } from "../docs/Role";
import BaseService from "./BaseService";
import RoleRepository from "../repositories/RoleRepository";
import RoleValidationSchema from "../validations/RoleValidation";

class RoleService extends BaseService<RoleDoc> {
  constructor() {
    super(RoleRepository, RoleValidationSchema);
  }
}
export default new RoleService();


import { AdminDoc } from "../docs/Admin";
import BaseService from "./BaseService";
import AdminRepository from "../repositories/AdminRepository";
import AdminValidationSchema from "../validations/AdminValidation";

class AdminService extends BaseService<AdminDoc> {
  private adminRepository = this.repository as typeof AdminRepository;
  constructor() {
    super(AdminRepository, AdminValidationSchema);
  }
}
export default new AdminService();

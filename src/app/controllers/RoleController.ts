
import { RoleDoc } from "../../domain/docs/Role";
import RoleService from "../../domain/services/RoleService";
import BaseController from "./BaseController";

class RoleController extends BaseController<RoleDoc> {
  private roleService = this.service as typeof RoleService;
  constructor() {
    super(RoleService);
  }
}
export default new RoleController();

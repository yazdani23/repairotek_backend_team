
import { PermissionDoc } from "../../domain/docs/Permission";
import PermissionService from "../../domain/services/PermissionService";
import BaseController from "./BaseController";

class PermissionController extends BaseController<PermissionDoc> {
  private permissionService = this.service as typeof PermissionService;
  constructor() {
    super(PermissionService);
  }
}
export default new PermissionController();

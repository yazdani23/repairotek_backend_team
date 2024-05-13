

import { PermissionDoc } from "../docs/Permission";

import BaseService from "./BaceService";
import PermissionRepository from "../repositories/PermissionRepository";
import PermissionValidationSchema from "../validations/PermissionValidation";

class PermissionService extends BaseService<PermissionDoc> {
  constructor(
  ) {
    super(PermissionRepository, PermissionValidationSchema);
  }
}
export default new PermissionService();

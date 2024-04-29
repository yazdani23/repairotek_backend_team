

import { EquipmentDoc } from "../docs/employee";

import BaseService from "./BaceService";
import EquipmentRepository from "../repositories/EquipmentRepository";
import EquipmentValidationSchema from "../validations/EquipmentValidation";

class EquipmentService extends BaseService<EquipmentDoc> {
  constructor(
  ) {
    super(EquipmentRepository, EquipmentValidationSchema);
  }
}
export default new EquipmentService();

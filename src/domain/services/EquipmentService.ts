import { EquipmentDoc } from "../docs/EquipmentEmployee";
import BaseService from "./BaseService";
import EquipmentRepository from "../repositories/EquipmentRepository";
import EquipmentValidationSchema from "../validations/EquipmentValidation";

class EquipmentService extends BaseService<EquipmentDoc> {
  constructor() {
    super(EquipmentRepository, EquipmentValidationSchema);
  }
}
export default new EquipmentService();

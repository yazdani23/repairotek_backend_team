import BaseService from "./BaseService";
import EquipmentRepository from "../repositories/EquipmentRepository";
import EquipmentValidationSchema from "../validations/EquipmentValidation";
import { EquipmentDoc } from "../docs/Equipment";

class EquipmentService extends BaseService<EquipmentDoc> {
  constructor() {
    super(EquipmentRepository, EquipmentValidationSchema);
  }
}
export default new EquipmentService();

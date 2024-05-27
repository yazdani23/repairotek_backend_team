import { EquipmentTypeDoc } from "../docs/Equipment";

import BaseService from "./BaseService";
import EquipmentTypeRepository from "../repositories/EquipmentTypeRepository";
import EquipmentTypeValidationSchema from "../validations/EquipmentTypeValidation";

class EquipmentTypeService extends BaseService<EquipmentTypeDoc> {
  constructor() {
    super(EquipmentTypeRepository, EquipmentTypeValidationSchema);
  }
}
export default new EquipmentTypeService();

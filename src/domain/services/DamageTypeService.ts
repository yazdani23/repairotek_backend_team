
import { DamageTypeDoc } from "../docs/DamageType";
import BaseService from "./BaseService";
import DamageTypeRepository from "../repositories/DamageTypeRepository";
import DamageTypeValidationSchema from "../validations/DamageTypeValidation";

class DamageTypeService extends BaseService<DamageTypeDoc> {
  private damageTypeRepository = this.repository as typeof DamageTypeRepository;
  constructor() {
    super(DamageTypeRepository, DamageTypeValidationSchema);
  }
}
export default new DamageTypeService();

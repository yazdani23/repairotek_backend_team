import { EquipmentDoc } from "../docs/unuse/EquipmentEmployee";
import EquipmentModel from "../models/unUse/EquipmentEmployeeModel";
import BaseRepository from "./BaseRepository";

class EquipmentRepository extends BaseRepository<EquipmentDoc> {
  constructor() {
    super(EquipmentModel);
  }
}

export default new EquipmentRepository();

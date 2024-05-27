import { EquipmentDoc } from "../docs/EquipmentEmployee";
import EquipmentModel from "../models/EquipmentEmployeeModel";
import BaseRepository from "./BaseRepository";

class EquipmentRepository extends BaseRepository<EquipmentDoc> {
  constructor() {
    super(EquipmentModel);
  }
}

export default new EquipmentRepository();

import { EquipmentTypeDoc } from "../docs/Equipment";
import EquipmentTypeModel from "../models/EquipmentModel";
import BaseRepository from "./BaseRepository";

class EquipmentTypeRepository extends BaseRepository<EquipmentTypeDoc> {
  constructor() {
    super(EquipmentTypeModel);
  }
}

export default new EquipmentTypeRepository();

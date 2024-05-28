import { EquipmentDoc } from "../docs/Equipment";
import EquipmentModel from "../models/EquipmentModel";
import BaseRepository from "./BaseRepository";

class EquipmentRepository extends BaseRepository<EquipmentDoc> {
  constructor() {
    super(EquipmentModel);
  }
}

export default new EquipmentRepository();

import { EquipmentDamageDoc } from "../docs/DamageEquipmentReport";
import EquipmentDamageModel from "../models/DamageEquipmentReportModel";
import BaseRepository from "./BaseRepository";

class EquipmentDamageRepository extends BaseRepository<EquipmentDamageDoc> {
  constructor() {
    super(EquipmentDamageModel);
  }
}

export default new EquipmentDamageRepository();

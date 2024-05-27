import { EquipmentDamageDoc } from "../docs/EquipmentDamage";
import EquipmentDamageModel from "../models/EquipmentDamageModel";
import BaseRepository from "./BaseRepository";

class EquipmentDamageRepository extends BaseRepository<EquipmentDamageDoc> {
  constructor() {
    super(EquipmentDamageModel);
  }
}

export default new EquipmentDamageRepository();

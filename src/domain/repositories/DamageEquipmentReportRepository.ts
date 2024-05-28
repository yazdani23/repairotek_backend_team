
import { DamageEquipmentReportDoc } from "../docs/DamageEquipmentReport";
import DamageEquipmentReportModel from "../models/DamageEquipmentReportModel";
import BaseRepository from "./BaseRepository";

class DamageEquipmentReportRepository extends BaseRepository<DamageEquipmentReportDoc> {
  constructor() {
    super(DamageEquipmentReportModel);
  }
}

export default new DamageEquipmentReportRepository();

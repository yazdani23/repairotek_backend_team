
import { DamageEquipmentReportDoc } from "../../domain/docs/DamageEquipmentReport";
import DamageEquipmentReportService from "../../domain/services/DamageEquipmentReportService";
import BaseController from "./BaseController";

class DamageEquipmentReportController extends BaseController<DamageEquipmentReportDoc> {
  private damageEquipmentReportService = this.service as typeof DamageEquipmentReportService;
  constructor() {
    super(DamageEquipmentReportService);
  }
}
export default new DamageEquipmentReportController();

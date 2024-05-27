
import { EquipmentDoc } from "../../domain/docs/Equipment";
import EquipmentService from "../../domain/services/EquipmentService";
import BaseController from "./BaseController";

class EquipmentController extends BaseController<EquipmentDoc> {
  constructor() {
    super(EquipmentService);
  }
}
export default new EquipmentController();

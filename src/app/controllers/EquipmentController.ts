import { EquipmentDoc } from "../../domain/docs/Equipment";
import EquipmentService from "../../domain/services/EquipmentService";
import BaceController from "./BaseController";

class EquipmentController extends BaceController<EquipmentDoc> {
  constructor() {
    super(EquipmentService);
  }
}
export default new EquipmentController();
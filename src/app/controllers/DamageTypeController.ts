import { DamageTypeDoc } from "../../domain/docs/unuse/DamageType";
import DamageTypeService from "../../domain/services/DamageTypeService";
import BaseController from "./BaseController";

class DamageTypeController extends BaseController<DamageTypeDoc> {
  private damageTypeService = this.service as typeof DamageTypeService;
  constructor() {
    super(DamageTypeService);
  }
}
export default new DamageTypeController();


import { ZoneDoc } from "../../domain/docs/Zone";
import ZoneService from "../../domain/services/ZoneService";
import BaseController from "./BaseController";

class ZoneController extends BaseController<ZoneDoc> {
  private zoneService = this.service as typeof ZoneService;
  constructor() {
    super(ZoneService);
  }
}
export default new ZoneController();


import { ProvinceDoc } from "../../domain/docs/Province";
import ProvinceService from "../../domain/services/ProvinceService";
import BaseController from "./BaseController";

class ProvinceController extends BaseController<ProvinceDoc> {
  private provinceService = this.service as typeof ProvinceService;
  constructor() {
    super(ProvinceService);
  }
}
export default new ProvinceController();

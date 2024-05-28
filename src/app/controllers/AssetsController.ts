
import { AssetsDoc } from "../../domain/docs/Assets";
import AssetsService from "../../domain/services/AssetsService";
import BaseController from "./BaseController";

class AssetsController extends BaseController<AssetsDoc> {
  private assetsService = this.service as typeof AssetsService;
  constructor() {
    super(AssetsService);
  }
}
export default new AssetsController();

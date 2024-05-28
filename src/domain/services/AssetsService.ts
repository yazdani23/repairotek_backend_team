
import { AssetsDoc } from "../docs/Assets";
import BaseService from "./BaseService";
import AssetsRepository from "../repositories/AssetsRepository";
import AssetsValidationSchema from "../validations/AssetsValidation";

class AssetsService extends BaseService<AssetsDoc> {
  private assetsRepository = this.repository as typeof AssetsRepository;
  constructor() {
    super(AssetsRepository, AssetsValidationSchema);
  }
}
export default new AssetsService();

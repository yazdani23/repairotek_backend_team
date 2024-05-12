

import { CameraDoc } from "../docs/Camera";

import BaseService from "./BaceService";
import CameraRepository from "../repositories/CameraRepository";
import CameraValidationSchema from "../validations/CameraValidation";

class CameraService extends BaseService<CameraDoc> {
  constructor(
  ) {
    super(CameraRepository, CameraValidationSchema);
  }
}
export default new CameraService();

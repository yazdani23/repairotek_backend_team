import { CameraDoc } from "../docs/unuse/Camera";
import CameraModel from "../models/unUse/CameraModel";
import BaseRepository from "./BaseRepository";

class CameraRepository extends BaseRepository<CameraDoc> {
  constructor() {
    super(CameraModel);
  }
}

export default new CameraRepository();

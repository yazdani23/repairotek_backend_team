

import { MaterialDoc } from "../docs/Material";

import BaseService from "./BaceService";
import MaterialRepository from "../repositories/MaterialRepository";
import MaterialValidationSchema from "../validations/MaterialValidation";

class MaterialService extends BaseService<MaterialDoc> {
  constructor(
  ) {
    super(MaterialRepository, MaterialValidationSchema);
  }
}
export default new MaterialService();

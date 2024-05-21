

import { MaterialDoc } from "../../domain/docs/Material";
import MaterialService from "../../domain/services/MaterialService";
import BaceController from "./BaseController";


class MaterialController extends BaceController<MaterialDoc> {
  constructor() {
    super(MaterialService);
  }
}
export default new MaterialController();
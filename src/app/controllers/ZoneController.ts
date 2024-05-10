

import ZoneService from "../../domain/services/ZoneService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const ZoneController = crudControllerGenerator("Zone", ZoneService);
export default ZoneController;

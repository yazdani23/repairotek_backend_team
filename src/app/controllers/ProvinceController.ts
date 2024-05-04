

import ProvinceService from "../../domain/services/ProvinceService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const ProvinceController = crudControllerGenerator("Province", ProvinceService);
export default ProvinceController;

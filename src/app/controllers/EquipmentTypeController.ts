

import EquipmentTypeService from "../../domain/services/EquipmentTypeService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const EquipmentTypeController = crudControllerGenerator("EquipmentType", EquipmentTypeService);
export default EquipmentTypeController;

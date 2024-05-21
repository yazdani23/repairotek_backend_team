

import EquipmentDamageService from "../../domain/services/EquipmentDamageService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const EquipmentDamageController = crudControllerGenerator("EquipmentDamage", EquipmentDamageService);
export default EquipmentDamageController;

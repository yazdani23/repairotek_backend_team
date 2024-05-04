import EquipmentService from "../../domain/services/EquipmentService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const EquipmentController = crudControllerGenerator("Equipment", EquipmentService);
export default EquipmentController;

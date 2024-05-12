

import UserZoneService from "../../domain/services/UserZoneService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const UserZoneController = crudControllerGenerator("UserZone", UserZoneService);
export default UserZoneController;

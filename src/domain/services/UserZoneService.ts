import { UserZoneDoc } from "../docs/UserZone";

import BaseService from "./BaseService";
import UserZoneRepository from "../repositories/UserZoneRepository";
import UserZoneValidationSchema from "../validations/UserZoneValidation";

class UserZoneService extends BaseService<UserZoneDoc> {
  constructor() {
    super(UserZoneRepository, UserZoneValidationSchema);
  }
}
export default new UserZoneService();

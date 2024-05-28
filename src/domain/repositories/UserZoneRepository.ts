import { UserZoneDoc } from "../docs/unuse/UserZone";
import UserZoneModel from "../models/unUse/UserZoneModel";
import BaseRepository from "./BaseRepository";

class UserZoneRepository extends BaseRepository<UserZoneDoc> {
  constructor() {
    super(UserZoneModel);
  }
}

export default new UserZoneRepository();

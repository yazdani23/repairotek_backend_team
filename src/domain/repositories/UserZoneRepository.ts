
import { UserZoneDoc } from "../docs/UserZone";
import UserZoneModel from "../models/UserZoneModel";
import BaseRepository from "./BaseRepository";

class UserZoneRepository extends BaseRepository<UserZoneDoc> {
 constructor(){
    super(UserZoneModel)
 }
}

export default  new UserZoneRepository();

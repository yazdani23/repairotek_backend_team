
import { RoleDoc } from "../docs/Role";
import RoleModel from "../models/RoleModel";
import BaseRepository from "./BaseRepository";

class RoleRepository extends BaseRepository<RoleDoc> {
 constructor(){
    super(RoleModel)
 }
}

export default  new RoleRepository();

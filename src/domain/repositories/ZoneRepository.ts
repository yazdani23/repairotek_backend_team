
import { ZoneDoc } from "../docs/Zone";
import ZoneModel from "../models/ZoneModel";
import BaseRepository from "./BaseRepository";

class ZoneRepository extends BaseRepository<ZoneDoc> {
 constructor(){
    super(ZoneModel)
 }
}

export default  new ZoneRepository();

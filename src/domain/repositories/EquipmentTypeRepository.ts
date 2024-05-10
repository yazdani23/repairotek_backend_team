
import { EquipmentTypeDoc } from "../docs/EquipmentType";
import EquipmentTypeModel from "../models/EquipmentTypeModel";
import BaseRepository from "./BaseRepository";

class EquipmentTypeRepository extends BaseRepository<EquipmentTypeDoc> {
 constructor(){
    super(EquipmentTypeModel)
 }
}

export default  new EquipmentTypeRepository();

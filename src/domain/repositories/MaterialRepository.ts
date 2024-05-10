
import { MaterialDoc } from "../docs/Material";
import MaterialModel from "../models/MaterialModel";
import BaseRepository from "./BaseRepository";

class MaterialRepository extends BaseRepository<MaterialDoc> {
 constructor(){
    super(MaterialModel)
 }
}

export default  new MaterialRepository();

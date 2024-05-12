
import { ProvinceDoc } from "../docs/Province";
import ProvinceModel from "../models/ProvinceModel";
import BaseRepository from "./BaseRepository";

class ProvinceRepository extends BaseRepository<ProvinceDoc> {
 constructor(){
    super(ProvinceModel)
 }
}

export default  new ProvinceRepository();

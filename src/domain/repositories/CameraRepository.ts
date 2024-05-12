
import { CameraDoc } from "../docs/Camera";
import CameraModel from "../models/CameraModel";
import BaseRepository from "./BaseRepository";

class CameraRepository extends BaseRepository<CameraDoc> {
 constructor(){
    super(CameraModel)
 }
}

export default  new CameraRepository();

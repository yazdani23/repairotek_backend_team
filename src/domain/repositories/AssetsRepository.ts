
import { AssetsDoc } from "../docs/Assets";
import AssetsModel from "../models/AssetsModel";
import BaseRepository from "./BaseRepository";

class AssetsRepository extends BaseRepository<AssetsDoc> {
  constructor(){
    super(AssetsModel)
  }
}

export default new AssetsRepository();

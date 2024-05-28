
import { ResourceDoc } from "../docs/Resource";
import ResourceModel from "../models/ResourceModel";
import BaseRepository from "./BaseRepository";

class ResourceRepository extends BaseRepository<ResourceDoc> {
  constructor(){
    super(ResourceModel)
  }
}

export default new ResourceRepository();

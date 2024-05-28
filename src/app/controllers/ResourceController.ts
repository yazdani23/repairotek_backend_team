
import { ResourceDoc } from "../../domain/docs/Resource";
import ResourceService from "../../domain/services/ResourceService";
import BaseController from "./BaseController";

class ResourceController extends BaseController<ResourceDoc> {
  private resourceService = this.service as typeof ResourceService;
  constructor() {
    super(ResourceService);
  }
}
export default new ResourceController();

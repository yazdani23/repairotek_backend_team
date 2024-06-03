
import { CountryDoc } from "../../domain/docs/Country";
import CountryService from "../../domain/services/CountryService";
import BaseController from "./BaseController";

class CountryController extends BaseController<CountryDoc> {
  private countryService = this.service as typeof CountryService;
  constructor() {
    super(CountryService);
  }
}
export default new CountryController();

import { EmployeeTimeCardDoc } from "../docs/TimeCardEmployee";
import EmployeeTimeCardModel from "../models/TimeCardModelEmployee";
import BaseRepository from "./BaseRepository";

class EmployeeTimeCardRepository extends BaseRepository<EmployeeTimeCardDoc> {
  constructor() {
    super(EmployeeTimeCardModel);
  }
}

export default new EmployeeTimeCardRepository();

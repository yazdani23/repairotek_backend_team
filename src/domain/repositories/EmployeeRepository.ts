import EmployeeModel from "../models/EmployeeModel";
import { EmployeeDoc } from "../docs/Employee";
import BaseRepository from "./BaseRepository";

class EmployeeRepository extends BaseRepository<EmployeeDoc> {
  constructor() {
    super(EmployeeModel);
  }
}

export default new EmployeeRepository();

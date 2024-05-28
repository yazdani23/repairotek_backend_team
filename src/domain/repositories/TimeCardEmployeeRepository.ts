import { TimeCardEmployeeDoc } from "../docs/TimeCardEmployee";
import TimeCardEmployeeModel from "../models/TimeCardModelEmployee";
import BaseRepository from "./BaseRepository";

class TimeCardEmployeeRepository extends BaseRepository<TimeCardEmployeeDoc> {
  constructor() {
    super(TimeCardEmployeeModel);
  }
}

export default new TimeCardEmployeeRepository();

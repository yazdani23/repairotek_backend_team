
import { EmployeeTimeCardDoc } from "../docs/EmployeeTimeCard";
import EmployeeTimeCardModel from "../models/EmployeeTimeCardModel";
import BaseRepository from "./BaseRepository";

class EmployeeTimeCardRepository extends BaseRepository<EmployeeTimeCardDoc> {
 constructor(){
    super(EmployeeTimeCardModel)
 }
}

export default  new EmployeeTimeCardRepository();


import { EmployeeInjuryDoc } from "../docs/EmployeeInjury";
import EmployeeInjuryModel from "../models/EmployeeInjuryModel";
import BaseRepository from "./BaseRepository";

class EmployeeInjuryRepository extends BaseRepository<EmployeeInjuryDoc> {
 constructor(){
    super(EmployeeInjuryModel)
 }
}

export default  new EmployeeInjuryRepository();

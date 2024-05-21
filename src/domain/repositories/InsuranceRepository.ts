
import { InsuranceDoc } from "../docs/Insurance";
import InsuranceModel from "../models/InsuranceModel";
import BaseRepository from "./BaseRepository";

class InsuranceRepository extends BaseRepository<InsuranceDoc> {
 constructor(){
    super(InsuranceModel)
 }
}

export default  new InsuranceRepository();

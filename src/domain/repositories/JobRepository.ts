
import { JobDoc } from "../docs/Job";
import JobModel from "../models/JobModel";
import BaseRepository from "./BaseRepository";

class JobRepository extends BaseRepository<JobDoc> {
 constructor(){
    super(JobModel)
 }
}

export default  new JobRepository();

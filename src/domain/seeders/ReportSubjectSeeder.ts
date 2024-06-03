import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ReportSubjectModel from "../models/ReportSubjectModel";
import { SubjectReport } from "../../utils/constant/SubjectReport";


export class ReportSubjectSeeder {
  static removeAllReportSubjects = async () => {
    try {
      await ReportSubjectModel.deleteMany({});
      logger.info("All report subjects removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove report subjects: " + error.message);
    }
  };

  static insertReportSubjects = async () => {
    try {
      const reportSubjects = SubjectReport.map((title) => ({
        title,
        description: faker.lorem.sentence(),
      }));

      await ReportSubjectModel.insertMany(reportSubjects);
      logger.info(
        `${reportSubjects.length} report subjects seeded successfully.`
      );
    } catch (error: any) {
      logger.error("Failed to seed report subjects: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllReportSubjects();
    await this.insertReportSubjects();
  };
}

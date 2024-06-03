import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ReportSubjectModel from "../models/ReportSubjectModel";
import ProjectGalleryModel from "../models/ProjectGalleryModel";
import ProjectModel from "../models/ProjectModel";
import UserModel from "../models/UserModel";
import DailyReportModel from "../models/DailyReportModel";

export class DailyReportSeeder {
  static removeAllDailyReportS = async () => {
    try {
      await DailyReportModel.deleteMany({});
      logger.info("All reports removed successfully.");
    } catch (error: any) {
      logger.error(`Failed to remove reports: ${error.message}`);
    }
  };

  static fetchRequiredData = async () => {
    try {
      const reportSubjects = await ReportSubjectModel.find({});
      const projectGalleries = await ProjectGalleryModel.find({});
      const projects = await ProjectModel.find({});
      const users = await UserModel.find({});

      if (!reportSubjects.length)
        throw new Error("No report subjects found in the database.");
      if (!projectGalleries.length)
        throw new Error("No project galleries found in the database.");
      if (!projects.length)
        throw new Error("No projects found in the database.");
      if (!users.length) throw new Error("No users found in the database.");

      return { reportSubjects, projectGalleries, projects, users };
    } catch (error: any) {
      logger.error(`Failed to fetch required data: ${error.message}`);
      throw error;
    }
  };

  static insertDailyReportS = async (batchSize = 5) => {
    try {
      const { reportSubjects, projectGalleries, projects, users } =
        await this.fetchRequiredData();

      const reports = [];

      for (let i = 0; i < projects.length; i++) {
        for (let i = 0; i < batchSize; i++) {
          const randomReportSubject =
            reportSubjects[Math.floor(Math.random() * reportSubjects.length)];
          const randomProjectGallery =
            projectGalleries[
              Math.floor(Math.random() * projectGalleries.length)
            ];
          const randomProject =
            projects[Math.floor(Math.random() * projects.length)];
          const randomUser = users[Math.floor(Math.random() * users.length)];

          reports.push({
            title: faker.lorem.words(5),
            reportSubjectId: randomReportSubject.id,
            description: faker.lorem.paragraph(),
            reportDate: faker.date.past(),
            reportTime: faker.date.past().toLocaleTimeString("en-US"),
            projectGalleryId: [randomProjectGallery.id],
            projectId: randomProject.id,
            createdBy: randomUser.id,
          });
        }
      }

      await DailyReportModel.insertMany(reports);
      logger.info(`${reports.length} reports seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed reports: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllDailyReportS();
    await this.insertDailyReportS();
  };
}

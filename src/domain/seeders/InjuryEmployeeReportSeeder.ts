import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import InjuryEmployeeReportModel from "../models/InjuryEmployeeReportModel";
import ReportSubjectModel from "../models/ReportSubjectModel";
import ProjectGalleryModel from "../models/ProjectGalleryModel";
import ProjectModel from "../models/ProjectModel";
import UserModel from "../models/UserModel";
import EmployeeModel from "../models/EmployeeModel";

export class InjuryEmployeeReportSeeder {
  static removeAllInjuryEmployeeReports = async () => {
    try {
      await InjuryEmployeeReportModel.deleteMany({});
      logger.info("All injury employee reports removed successfully.");
    } catch (error: any) {
      logger.error(
        `Failed to remove injury employee reports: ${error.message}`
      );
    }
  };

  static fetchRequiredData = async () => {
    try {
      const reportSubjects = await ReportSubjectModel.find({});
      const projectGalleries = await ProjectGalleryModel.find({});
      const projects = await ProjectModel.find({});
      const users = await UserModel.find({});
      const employees = await EmployeeModel.find({});

      if (!reportSubjects.length)
        throw new Error("No report subjects found in the database.");
      if (!projectGalleries.length)
        throw new Error("No project galleries found in the database.");
      if (!projects.length)
        throw new Error("No projects found in the database.");
      if (!users.length) throw new Error("No users found in the database.");
      if (!employees.length)
        throw new Error("No employees found in the database.");

      return { reportSubjects, projectGalleries, projects, users, employees };
    } catch (error: any) {
      logger.error(`Failed to fetch required data: ${error.message}`);
      throw error;
    }
  };

  static insertInjuryEmployeeReports = async (batchSize = 10) => {
    try {
      const { reportSubjects, projectGalleries, projects, users, employees } =
        await this.fetchRequiredData();

      const injuryEmployeeReports = [];

      for (let i = 0; i < batchSize; i++) {
        const randomReportSubject =
          reportSubjects[Math.floor(Math.random() * reportSubjects.length)];
        const randomProjectGallery =
          projectGalleries[Math.floor(Math.random() * projectGalleries.length)];
        const randomProject =
          projects[Math.floor(Math.random() * projects.length)];
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomEmployee =
          employees[Math.floor(Math.random() * employees.length)];

        injuryEmployeeReports.push({
          title: faker.lorem.words(5),
          reportSubjectId: randomReportSubject.id,
          description: faker.lorem.paragraph(),
          reportDate: faker.date.past(),
          reportTime: faker.date.past().toLocaleTimeString("en-US"),
          projectGalleryId: [randomProjectGallery.id],
          projectId: randomProject.id,
          createdBy: randomUser.id,
          employeeId: randomEmployee.id,
        });
      }

      await InjuryEmployeeReportModel.insertMany(injuryEmployeeReports);
      logger.info(
        `${injuryEmployeeReports.length} injury employee reports seeded successfully.`
      );
    } catch (error: any) {
      logger.error(`Failed to seed injury employee reports: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllInjuryEmployeeReports();
    await this.insertInjuryEmployeeReports();
  };
}

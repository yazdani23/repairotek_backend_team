import {faker} from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ProjectGallerySubjectModel from "../models/ProjectGallerySubjectModel";
import { ProjectGallerySubject } from "../../utils/constant/ProjectGallerySubject";



export class ProjectGallerySubjectSeeder {
  static removeAllProjectGallerySubjects = async () => {
    try {
      await ProjectGallerySubjectModel.deleteMany({});
      logger.info("All project gallery subjects removed successfully.");
    } catch (error: any) {
      logger.error(
        "Failed to remove project gallery subjects: " + error.message
      );
    }
  };

  static insertProjectGallerySubjects = async () => {
    try {
      const projectGallerySubjects = ProjectGallerySubject.map((title) => ({
        title,
        description: faker.lorem.paragraph(),
      }));

      await ProjectGallerySubjectModel.insertMany(projectGallerySubjects);
      logger.info(
        `${projectGallerySubjects.length} project gallery subjects seeded successfully.`
      );
    } catch (error: any) {
      logger.error("Failed to seed project gallery subjects: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllProjectGallerySubjects();
    await this.insertProjectGallerySubjects();
  };
}

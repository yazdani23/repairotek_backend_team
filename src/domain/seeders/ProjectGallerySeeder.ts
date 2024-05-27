import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ProjectGalleryModel from "../models/ProjectGalleryModel";
import ProjectModel from "../models/ProjectModel";
import UserModel from "../models/UserModel";
import MediaSubjectModel from "../models/MediaSubjectModel";

export class ProjectGallerySeeder {
  static removeAllProjectGallerys = async () => {
    try {
      await ProjectGalleryModel.deleteMany({});
      logger.info("All projectGallerys removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove projectGallerys: " + error.message);
    }
  };

  static insertProjectGallerys = async (batchSize = 10) => {
    try {
      const projects = await ProjectModel.find({});
      const users = await UserModel.find({});
      const mediaSubjects = await MediaSubjectModel.find({});

      if (!projects.length || !users.length || !mediaSubjects.length) {
        logger.error(
          "Please ensure that projects, users, and media subjects are populated before seeding project galleries."
        );
        return;
      }

      const projectGalleries = [];

      for (let i = 0; i < batchSize; i++) {
        const project = projects[Math.floor(Math.random() * projects.length)];
        const user = users[Math.floor(Math.random() * users.length)];
        const mediaSubject =
          mediaSubjects[Math.floor(Math.random() * mediaSubjects.length)];

        projectGalleries.push({
          projectId: project._id,
          userId: user._id,
          mediaName: faker.lorem.words(3),
          mediaUrl: faker.image.imageUrl(),
          mediaDateTime: faker.date.past().toISOString(),
          mediaSubjectId: mediaSubject._id,
          location: faker.address.city(),
          description: faker.lorem.sentence(),
        });
      }

      await ProjectGalleryModel.insertMany(projectGalleries);
      logger.info(batchSize + " projectGallerys seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed projectGallerys: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllProjectGallerys();
    await this.insertProjectGallerys();
  };
}

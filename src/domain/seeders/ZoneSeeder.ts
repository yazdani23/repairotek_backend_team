import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ZoneModel from "../models/ZoneModel";
import ProvinceModel from "../models/ProvinceModel";

export class ZoneSeeder {
  static removeAllZones = async () => {
    try {
      await ZoneModel.deleteMany({});
      logger.info("All zones removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove zones: " + error.message);
    }
  };

  static insertZones = async (batchSize = 10) => {
    try {
      const provinces = await ProvinceModel.find({});
      if (provinces.length === 0) {
        throw new Error("No provinces found in the database.");
      }

      const zones = [];

      for (let i = 0; i < batchSize; i++) {
        const randomProvince =
          provinces[Math.floor(Math.random() * provinces.length)];

        zones.push({
          name: faker.location.city(),
          roadWay: {
            name: faker.lorem.words(2),
            status: faker.helpers.arrayElement(["good", "average", "poor"]),
            traffic: faker.helpers.arrayElement(["low", "medium", "high"]),
          },
          location: {
            type: "Point",
            coordinates: [
              faker.location.longitude(),
              faker.location.latitude(),
            ],
          },
          description: faker.lorem.paragraph(),
          provinceId: randomProvince.id,
        });
      }

      await ZoneModel.insertMany(zones);
      logger.info(`${batchSize} zones seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed zones: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllZones();
    await this.insertZones();
  };
}

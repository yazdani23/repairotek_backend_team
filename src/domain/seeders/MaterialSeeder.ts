import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import MaterialModel from "../models/MaterialModel";

export class MaterialSeeder {
  
  static removeAllMaterials = async () => {
    try {
      await MaterialModel.deleteMany({});
      logger.info("All materials removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove materials: " + error.message);
    }
  };

  static insertMaterials = async (batchSize = 10) => {
    try {
      const materials = [];

      for (let i = 0; i < batchSize; i++) {
        materials.push({
          name: faker.commerce.productMaterial(),
          description: faker.commerce.productDescription(),
          price: parseFloat(faker.commerce.price()),
        });
      }

      await MaterialModel.insertMany(materials);
      logger.info(batchSize + " materials seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed materials: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllMaterials();
    await this.insertMaterials();
  };
}

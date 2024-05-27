import * as fs from "fs/promises";
import * as path from "path";
import { SEEDER_PATH, doesFileExist } from "./utils";

export const generateSeederFile = async (
  resourceNameUC: string,
  resourceNameLC: string
): Promise<void> => {
  const seederPath = path.join(SEEDER_PATH, `${resourceNameUC}Seeder.ts`);

  if (await doesFileExist(seederPath)) {
    console.error(`${resourceNameUC}Seeder already exists at: ${seederPath}`);
    return;
  }

  const seederContent = `import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ${resourceNameUC}Model from "../models/${resourceNameUC}Model";

export class ${resourceNameUC}Seeder {
  
  static removeAll${resourceNameUC}s = async () => {
    try {
      await ${resourceNameUC}Model.deleteMany({});
      logger.info("All ${resourceNameLC}s removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove ${resourceNameLC}s: " + error.message);
    }
  };

  static insert${resourceNameUC}s = async (batchSize = 10) => {
    try {
      const ${resourceNameLC}s = [];

      for (let i = 0; i < batchSize; i++) {
        ${resourceNameLC}s.push({

        });
      }

      await ${resourceNameUC}Model.insertMany(${resourceNameLC}s);
      logger.info(batchSize + " ${resourceNameLC}s seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed ${resourceNameLC}s: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAll${resourceNameUC}s();
    await this.insert${resourceNameUC}s();
  };
}
`;

  try {
    await fs.writeFile(seederPath, seederContent);
    console.log(`${resourceNameUC}Seeder created at: ${seederPath}`);
  } catch (error) {
    console.error("Error creating Seeder:", error);
  }
};

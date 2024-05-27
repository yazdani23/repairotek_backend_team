import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import EquipmentModel from "../models/EquipmentModel";

export class EquipmentSeeder {
  static removeAllEquipments = async () => {
    try {
      await EquipmentModel.deleteMany({});
      logger.info("All equipments removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove equipments: " + error.message);
    }
  };

  static insertEquipments = async (batchSize = 10) => {
    try {
      const equipments = [];

      for (let i = 0; i < batchSize; i++) {
        equipments.push({
          name: faker.vehicle.vehicle(),
          equipmentModel: faker.vehicle.type(),
          description: `
           VIN: ${faker.vehicle.vin()},
           VRM: ${faker.vehicle.vrm()},
           Manufacturer: ${faker.vehicle.manufacturer()},
           Color: ${faker.vehicle.color()}, 
           Fuel: ${faker.vehicle.fuel()},
           Model: ${faker.vehicle.model()}`,
          pricePerHour: parseFloat(
            faker.commerce.price({ min: 100, max: 200, dec: 2 })
          ),
        });
      }

      await EquipmentModel.insertMany(equipments);
      logger.info(batchSize + " equipments seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed equipments: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllEquipments();
    await this.insertEquipments();
  };
}

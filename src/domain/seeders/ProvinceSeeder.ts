import axios from "axios";
import logger from "../../utils/helpers/logger";
import CountryModel from "../models/CountryModel";
import ProvinceModel from "../models/ProvinceModel";

export class ProvinceSeeder {
  static removeAllProvinces = async () => {
    try {
      await ProvinceModel.deleteMany({});
      logger.info("All provinces removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove provinces: " + error.message);
    }
  };

  static fetchProvincesData = async (geonameId: number) => {
    try {
      const response = await axios.get(
        `http://api.geonames.org/childrenJSON?geonameId=${geonameId}&username=yazdani23`
      );
      return response.data.geonames;
    } catch (error: any) {
      logger.error(
        `Failed to fetch provinces data for country code ${geonameId}: ${error.message}`
      );
      throw error;
    }
  };

  static insertProvinces = async () => {
    try {
      const countries = await CountryModel.find({});
      if (countries.length === 0)
        throw new Error("No countries found in the database.");

      for (const country of countries) {
        const provincesData = await this.fetchProvincesData(country.geonameId);
        if (provincesData) {
          const provinces = provincesData.map((province: any) => ({
            code: province.geonameId,
            name: province.name,
            countryId: country._id,
          }));

          await ProvinceModel.insertMany(provinces);
          logger.info(
            `${provinces.length} provinces for country ${country.name} seeded successfully.`
          );
        }
      }
    } catch (error: any) {
      logger.error("Failed to seed provinces: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllProvinces();
    await this.insertProvinces();
  };
}

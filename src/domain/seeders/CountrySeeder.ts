import axios from "axios";
import logger from "../../utils/helpers/logger";
import CountryModel from "../models/CountryModel";

export class CountrySeeder {
  static removeAllCountries = async () => {
    try {
      await CountryModel.deleteMany({});
      logger.info("All countries removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove countries: " + error.message);
    }
  };

  static fetchCountriesData = async () => {
    try {
      const response = await axios.get(
        "http://api.geonames.org/countryInfoJSON?username=yazdani23"
      );
      return response.data.geonames;
    } catch (error: any) {
      logger.error("Failed to fetch countries data: " + error.message);
      throw error;
    }
  };

  static insertCountries = async () => {
    try {
      const countriesData = await this.fetchCountriesData();

      const countries = countriesData.map((country: any) => ({
        geonameId: country.geonameId,
        code: country.countryCode ? country.countryCode : "N/A",
        name: country.countryName ? country.countryName : "N/A",
        capital: country.capital ? country.capital : "N/A",
        population: country.population ? country.population : "N/A",
        area: country.areaInSqKm ? country.areaInSqKm : "N/A",
        languages: country.languages ? country.languages : "N/A",
        currency: country.currencyCode ? country.currencyCode : "N/A",
        // timezone: country.timezone,
        flagUrl: `https://www.countryflags.io/${country.countryCode}/flat/64.png`,
      }));

      await CountryModel.insertMany(countries);
      logger.info(`${countries.length} countries seeded successfully.`);
    } catch (error: any) {
      logger.error("Failed to seed countries: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllCountries();
    await this.insertCountries();
  };
}

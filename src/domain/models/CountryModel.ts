
import { CountryDoc } from "../docs/Country";
import { generateSchema } from "../../utils/generators/modelGenerator";

const CountryModel = generateSchema<CountryDoc>("Country", {
  geonameId: { type: Number, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  capital: { type: String, required: true },
  population: { type: Number, required: true },
  area: { type: Number, required: true },
  languages: { type: [String], required: true },
  currency: { type: String, required: true },
  // timezone: { type: String, required: true },
  flagUrl: { type: String, required: true },
});

export default CountryModel;


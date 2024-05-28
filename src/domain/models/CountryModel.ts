
import { CountryDoc } from "../docs/Country";
import { generateSchema } from "../../utils/generators/modelGenerator";

const CountryModel = generateSchema<CountryDoc>("Country", {
  code: {type:Number, required:true},
  name: {type:String, required:true}
});

export default CountryModel;


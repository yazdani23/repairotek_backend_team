
import { AdminDoc } from "../docs/Admin";
import { generateSchema } from "../../utils/generators/modelGenerator";

const AdminModel = generateSchema<AdminDoc>("Admin", {

});

export default AdminModel;


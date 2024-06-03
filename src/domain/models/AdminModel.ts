
import { AdminDoc } from "../docs/Admin";
import { toJsonSchema } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";
import UserModel from "./UserModel";

const AdminSchema = new Schema<AdminDoc>({});
// toJsonSchema(AdminSchema);

const AdminModel = UserModel.discriminator("AdminModel", AdminSchema);

export default AdminModel;
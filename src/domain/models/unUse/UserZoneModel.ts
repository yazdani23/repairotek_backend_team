import { Schema } from "mongoose";
import { UserZoneDoc } from "../../docs/unuse/UserZone";
import { generateSchema } from "../../../utils/generators/modelGenerator";

const UserZoneModel = generateSchema<UserZoneDoc>("UserZone", {
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true },
});

export default UserZoneModel;

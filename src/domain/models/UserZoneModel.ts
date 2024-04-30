import { Schema } from "mongoose";
import { UserZoneDoc } from "../docs/UserZone";
import { generateSchema } from "../../utils/generators/modelGenerator";

const UserZoneModel = generateSchema<UserZoneDoc>("UserZone",
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    zoneId: { type: Schema.Types.ObjectId, required: true },
  },
);

export default UserZoneModel;

import { Schema } from "mongoose";
import { EquipmentDamageDoc } from "../docs/EquipmentDamage";
import { generateSchema } from "../../utils/generators/modelGenerator";


const EquipmentDamageModel = generateSchema<EquipmentDamageDoc>("EquipmentDamage",
{
  equipmentId: { type: Schema.Types.ObjectId,ref:"Equipment", required: true },
  damageTypeId: { type: Schema.Types.ObjectId,ref:"DamageType", required: true },
  damageDate: { type: String, required: true },
  damageTime: { type: String, required: true },
   insuranceId: {type: Schema.Types.ObjectId,ref:"Insurance", required: true},
  description: { type: String, required: true }
});

export default EquipmentDamageModel;
  
  
 
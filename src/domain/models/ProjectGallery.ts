import { model, Schema } from "mongoose";
import { ProjectGalleryDoc } from "../../types/projectGallery"


const projectGallerySchema = new Schema<ProjectGalleryDoc>(
  {
   projectid: {type:Schema.Types.ObjectId, required: true},
  employeeid: {type:Schema.Types.ObjectId, required: true},
  media: { type: String, required: true },
  mediadatetime: { type: String, required: true },
  mediasubjectid: {type:Schema.Types.ObjectId, required: true},
  location:  { type: String, required: true }, 
  description:  { type: String},
  },
  { timestamps: true }
);

projectGallerySchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const ProjectGallery = model<ProjectGalleryDoc>("ProjectGallery", projectGallerySchema);





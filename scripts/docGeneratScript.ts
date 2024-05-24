import * as fs from "fs/promises";
import * as path from "path";
import { DOCS_PATH, doesFileExist } from "./commonScript";

export const createDocFile = async (resourceNameUC: string): Promise<void> => {
  const docPath = path.join(DOCS_PATH, `${resourceNameUC}.ts`);

  if (await doesFileExist(docPath)) {
    console.error(`${resourceNameUC} already exists at: ${docPath}`);
    return;
  }

  const docContent = `
import { Document } from "mongoose";

export interface ${resourceNameUC}Doc extends Document {

}
`;

  try {
    await fs.writeFile(docPath, docContent);
    console.log(`${resourceNameUC} created at: ${docPath}`);
  } catch (error) {
    console.error("Error creating Doc:", error);
  }
};

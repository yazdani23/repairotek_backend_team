import * as fs from "fs/promises";
import * as path from "path";
import { CONTROLLERS_PATH, doesFileExist } from "./utils";

export const generateControllerFile = async (
  resourceNameUC: string,
  resourceNameLC: string
): Promise<void> => {
  const controllerPath = path.join(
    CONTROLLERS_PATH,
    `${resourceNameUC}Controller.ts`
  );

  if (await doesFileExist(controllerPath)) {
    console.error(
      `${resourceNameUC}Controller already exists at: ${controllerPath}`
    );
    return;
  }

  const controllerContent = `
import { ${resourceNameUC}Doc } from "../../domain/docs/${resourceNameUC}";
import ${resourceNameUC}Service from "../../domain/services/${resourceNameUC}Service";
import BaseController from "./BaseController";

class ${resourceNameUC}Controller extends BaseController<${resourceNameUC}Doc> {
  private ${resourceNameLC}Service = this.service as typeof ${resourceNameUC}Service;
  constructor() {
    super(${resourceNameUC}Service);
  }
}
export default new ${resourceNameUC}Controller();
`;

  try {
    await fs.writeFile(controllerPath, controllerContent);
    console.log(`${resourceNameUC}Controller created at: ${controllerPath}`);
  } catch (error) {
    console.error("Error creating Controller:", error);
  }
};
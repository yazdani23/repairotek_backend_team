import * as fs from "fs/promises";
import * as path from "path";

// Define constant paths
const CONTROLLERS_PATH = "src/app/controllers";
const SERVICES_PATH = "src/domain/services";
const REPOSITORIES_PATH = "src/domain/repositories";

const isValidResourceName = (resourceName: string): boolean => {
  return /^[a-zA-Z0-9_]+$/.test(resourceName);
};

const doesFileExist = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true; // File exists
  } catch {
    return false; // File does not exist
  }
};

const createControllerFile = async (
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

const createServiceFile = async (
  resourceNameUC: string,
  resourceNameLC: string
): Promise<void> => {
  const servicePath = path.join(SERVICES_PATH, `${resourceNameUC}Service.ts`);

  if (await doesFileExist(servicePath)) {
    console.error(`${resourceNameUC}Service already exists at: ${servicePath}`);
    return;
  }

  const serviceContent = `
import { ${resourceNameUC}Doc } from "../docs/${resourceNameUC}";
import BaseService from "./BaseService";
import ${resourceNameUC}Repository from "../repositories/${resourceNameUC}Repository";
import ${resourceNameUC}ValidationSchema from "../validations/${resourceNameUC}Validation";

class ${resourceNameUC}Service extends BaseService<${resourceNameUC}Doc> {
  private ${resourceNameLC}Repository = this.repository as typeof ${resourceNameUC}Repository;
  constructor() {
    super(${resourceNameUC}Repository, ${resourceNameUC}ValidationSchema);
  }
}
export default new ${resourceNameUC}Service();
`;

  try {
    await fs.writeFile(servicePath, serviceContent);
    console.log(`${resourceNameUC}Service created at: ${servicePath}`);
  } catch (error) {
    console.error("Error creating Service:", error);
  }
};

const createRepositoryFile = async (
  resourceNameUC: string,
  resourceNameLC: string
): Promise<void> => {
  const repositoryPath = path.join(
    REPOSITORIES_PATH,
    `${resourceNameUC}Repository.ts`
  );

  if (await doesFileExist(repositoryPath)) {
    console.error(
      `${resourceNameUC}Repository already exists at: ${repositoryPath}`
    );
    return;
  }

  const repositoryContent = `
import { ${resourceNameUC}Doc } from "../docs/${resourceNameUC}";
import ${resourceNameUC}Model from "../models/${resourceNameUC}Model";
import BaseRepository from "./BaseRepository";

class ${resourceNameUC}Repository extends BaseRepository<${resourceNameUC}Doc> {
  constructor(){
    super(${resourceNameUC}Model)
  }
}

export default new ${resourceNameUC}Repository();
`;

  try {
    await fs.writeFile(repositoryPath, repositoryContent);
    console.log(`${resourceNameUC}Repository created at: ${repositoryPath}`);
  } catch (error) {
    console.error("Error creating Repository:", error);
  }
};

const main = async () => {
  const resourceNameInput = process.argv[3];
  if (!resourceNameInput) {
    console.error("Please provide a resource name as an argument.");
    return;
  }

  const resourceNameUC =
    resourceNameInput.charAt(0).toUpperCase() + resourceNameInput.slice(1);
  const resourceNameLC =
    resourceNameInput.charAt(0).toLowerCase() + resourceNameInput.slice(1);

  if (!isValidResourceName(resourceNameInput)) {
    console.error(
      "Invalid resource name. Please use only letters, numbers, and underscore (_)."
    );
    return;
  }

  await createControllerFile(resourceNameUC, resourceNameLC);
  await createServiceFile(resourceNameUC, resourceNameLC);
  await createRepositoryFile(resourceNameUC, resourceNameLC);
};

main();

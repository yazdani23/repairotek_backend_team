const fs = require("fs");
const path = require("path");

const resourceName = process.argv[3];

const controllerPath = path.join(
  "src/app/controllers",
  `${resourceName}Controller.ts`
);

const controllerContent = `
import { ${resourceName}Doc } from "../../domain/docs/${resourceName}";
import ${resourceName}Service from "../../domain/services/${resourceName}Service";
import BaceController from "./BaseController";

class ${resourceName}Controller extends BaceController<${resourceName}Doc> {
  constructor() {
    super(${resourceName}Service);
  }
}
export default new ${resourceName}Controller();
`;

try {
  fs.writeFileSync(controllerPath, controllerContent);
  console.log(`${resourceName}Service created at: ${controllerPath}`);
} catch (error) {
  console.error("Error creating Service:", error);
}

////////////////////////////////////


const servicePath = path.join(
  "src/domain/services",
  `${resourceName}Service.ts`
);

const serviceContent = `

import { ${resourceName}Doc } from "../docs/${resourceName}";

import BaseService from "./BaceService";
import ${resourceName}Repository from "../repositories/${resourceName}Repository";
import ${resourceName}ValidationSchema from "../validations/${resourceName}Validation";

class ${resourceName}Service extends BaseService<${resourceName}Doc> {
  constructor(
  ) {
    super(${resourceName}Repository, ${resourceName}ValidationSchema);
  }
}
export default new ${resourceName}Service();
`;

try {
  fs.writeFileSync(servicePath, serviceContent);
  console.log(`${resourceName}Service created at: ${servicePath}`);
} catch (error) {
  console.error("Error creating Service:", error);
}

//////////////////////////////////////////////
const repositoryPath = path.join(
  "src/domain/repositories",
  `${resourceName}Repository.ts`
);

const repositoryContent = `
import { ${resourceName}Doc } from "../docs/${resourceName}";
import ${resourceName}Model from "../models/${resourceName}Model";
import BaseRepository from "./BaseRepository";

class ${resourceName}Repository extends BaseRepository<${resourceName}Doc> {
 constructor(){
    super(${resourceName}Model)
 }
}

export default  new ${resourceName}Repository();
`;
try {
  fs.writeFileSync(repositoryPath, repositoryContent);
  console.log(`${resourceName}Repository created at: ${repositoryPath}`);
} catch (error) {
  console.error("Error creating repository:", error);
}


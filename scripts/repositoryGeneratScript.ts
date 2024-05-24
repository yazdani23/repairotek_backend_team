import * as fs from "fs/promises";
import * as path from "path";
import { REPOSITORIES_PATH, doesFileExist } from "./commonScript";

export const createRepositoryFile = async (resourceNameUC: string): Promise<void> => {
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
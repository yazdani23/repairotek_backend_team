import * as fs from "fs/promises";

// Define constant paths
export const DOCS_PATH = "src/domain/docs";
export const MODELS_PATH = "src/domain/models";
export const VALIDATIONS_PATH = "src/domain/validations";
export const REPOSITORIES_PATH = "src/domain/repositories";
export const SERVICES_PATH = "src/domain/services";
export const CONTROLLERS_PATH = "src/app/controllers";
export const SEEDER_PATH = "src/domain/seeders";

export const isValidResourceName = (resourceName: string): boolean => {
  return /^[a-zA-Z0-9_]+$/.test(resourceName);
};

export const validateResourceName = (name: string) => {
  if (!isValidResourceName(name)) {
    console.error(
      "Invalid resource name. Only letters, numbers, and underscores are allowed."
    );
    process.exit(1);
  }
};
export const doesFileExist = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true; // File exists
  } catch {
    return false; // File does not exist
  }
};

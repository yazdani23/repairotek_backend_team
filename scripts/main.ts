import { Command } from "commander";
import { generateDocFile } from "./generateDocFile";
import { generateValidationFile } from "./generateValidationFile";
import { generateModelFile } from "./generateModelFile";
import { generateRepositoryFile } from "./generateRepositoryFile";
import { generateServiceFile } from "./generateServiceFile";
import { generateControllerFile } from "./generateControllerFile";
import { generateRouterFile } from "./generateRouterFile";
import { validateResourceName } from "./utils";
import { argv } from "process";

/// How To Use:

/// To generate all files for a resource, enter the following command in the terminal:
/// npm run generate:all make:all Test
/// Test is a placeholder word

/// To generate a controller for a resource, enter the following command:
/// npm run generate:controller make:controller Test
/// Test is a placeholder word

/// Use this same pattern to generate the other files for a resource


const program = new Command();

const generateFiles = async (
  name: string,
  filesToGenerate: Array<
    (resourceNameUC: string, resourceNameLC?: string) => Promise<void>
  >
) => {
  validateResourceName(name);
  const resourceNameUC = name.charAt(0).toUpperCase() + name.slice(1);
  const resourceNameLC = name.charAt(0).toLowerCase() + name.slice(1);

  for (const generateFile of filesToGenerate) {
    await generateFile(resourceNameUC, resourceNameLC);
  }
};

program
  .command("make:doc <name>")
  .description("Create a new doc")
  .action(async (name) => {
    await generateFiles(name, [
      async (resourceNameUC) => await generateDocFile(resourceNameUC),
    ]);
  });

program
  .command("make:validation <name>")
  .description("Create a new validation")
  .action(async (name) => {
    await generateFiles(name, [
      async (resourceNameUC) => await generateValidationFile(resourceNameUC),
    ]);
  });

program
  .command("make:model <name>")
  .description("Create a new model")
  .action(async (name) => {
    await generateFiles(name, [
      async (resourceNameUC) => await generateModelFile(resourceNameUC),
    ]);
  });

program
  .command("make:repository <name>")
  .description("Create a new repository")
  .action(async (name) => {
    await generateFiles(name, [
      async (resourceNameUC) => await generateRepositoryFile(resourceNameUC),
    ]);
  });

program
  .command("make:service <name>")
  .description("Create a new service")
  .action(async (name) => {
    await generateFiles(name, [
      async (resourceNameUC, resourceNameLC) =>
        await generateServiceFile(resourceNameUC, resourceNameLC!),
    ]);
  });
program
  .command("make:route <name>")
  .description("Create a new route")
  .action(async (name) => {
    await generateFiles(name, [
      async (resourceNameUC, resourceNameLC) =>
        await generateRouterFile(resourceNameUC, resourceNameLC!),
    ]);
  });
program
  .command("make:controller <name>")
  .description("Create a new controller")
  .action(async (name) => {
    await generateFiles(name, [
      async (resourceNameUC, resourceNameLC) =>
        await generateControllerFile(resourceNameUC, resourceNameLC!),
    ]);
  });

program
  .command("make:all <name>")
  .description("Create all components")
  .action(async (name) => {
    await generateFiles(name, [
      async (resourceNameUC, resourceNameLC) =>
        await generateRouterFile(resourceNameUC, resourceNameLC!),
      async (resourceNameUC, resourceNameLC) =>
        await generateControllerFile(resourceNameUC, resourceNameLC!),
      async (resourceNameUC, resourceNameLC) =>
        await generateServiceFile(resourceNameUC, resourceNameLC!),
      async (resourceNameUC) => await generateRepositoryFile(resourceNameUC),
      async (resourceNameUC) => await generateDocFile(resourceNameUC),
      async (resourceNameUC) => await generateValidationFile(resourceNameUC),
      async (resourceNameUC) => await generateModelFile(resourceNameUC),
    ]);
  });

program.parse(argv);

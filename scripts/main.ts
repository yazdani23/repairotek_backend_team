import { generateControllerFile } from "./generateControllerFile";
import { generateDocFile } from "./generateDocFile";
import { generateModelFile } from "./generateModelFile";
import { generateRepositoryFile } from "./generateRepositoryFile";
import { generateServiceFile } from "./generateServiceFile";
import { generateValidationFile } from "./generateValidationFile";
import { isValidResourceName } from "./utils";


const main = async () => {
  const [command, resourceNameInput] = process.argv.slice(4);
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

  switch (command) {
    case "make:controller":
      await generateControllerFile(resourceNameUC, resourceNameLC);
      break;
    case "make:service":
      await generateServiceFile(resourceNameUC, resourceNameLC);
      break;
    case "make:repository":
      await generateRepositoryFile(resourceNameUC);
      break;
    case "make:doc":
      await generateDocFile(resourceNameUC);
      break;
    case "make:validation":
      await generateValidationFile(resourceNameUC);
      break;
    case "make:model":
      await generateModelFile(resourceNameUC);
      break;
    case "make:all":
      await generateControllerFile(resourceNameUC, resourceNameLC);
      await generateServiceFile(resourceNameUC, resourceNameLC);
      await generateRepositoryFile(resourceNameUC);
      await generateDocFile(resourceNameUC);
      await generateValidationFile(resourceNameUC);
      await generateModelFile(resourceNameUC);
      break;
    default:
      console.error(`Unknown command: ${command}`);
      break;
  }


};

main();

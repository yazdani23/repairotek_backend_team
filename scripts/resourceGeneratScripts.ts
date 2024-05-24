import { isValidResourceName } from "./commonScript";
import { createControllerFile } from "./controllerGeneratScript";
import { createDocFile } from "./docGeneratScript";
import { createModelFile } from "./modelGeneratScript";
import { createRepositoryFile } from "./repositoryGeneratScript";
import { createServiceFile } from "./serviceGeneratScript";
import { createValidationFile } from "./validationGeneratScript";

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

  await createDocFile(resourceNameUC);
  await createModelFile(resourceNameUC);
  await createValidationFile(resourceNameUC);
  await createRepositoryFile(resourceNameUC);
  await createServiceFile(resourceNameUC, resourceNameLC);
  await createControllerFile(resourceNameUC, resourceNameLC);
};

main();

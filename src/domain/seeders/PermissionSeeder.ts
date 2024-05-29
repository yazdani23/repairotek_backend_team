import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import PermissionModel from "../models/PermissionModel";
import UserModel from "../models/UserModel";
import ResourceModel from "../models/ResourceModel";
import { RoleDoc } from "../docs/Role";

export class PermissionSeeder {
  static removeAllPermissions = async () => {
    try {
      await PermissionModel.deleteMany({});
      logger.info("All permissions removed successfully.");
    } catch (error: any) {
      logger.error(`Failed to remove permissions: ${error.message}`);
    }
  };

  static insertPermissions = async () => {
    try {
      const users = await UserModel.find({}).populate("roleId");
      const resources = await ResourceModel.find({});

      if (users.length === 0)
        throw new Error("No users found in the database.");
      if (resources.length === 0)
        throw new Error("No resources found in the database.");

      let counter=0

      for (const user of users) {
        const permissionsUser: any[] = [];

        for (const resource of resources) {
          let canRead, canWrite, canEdit, canDelete;

          if (user.roleId && (user.roleId as RoleDoc).name === "Admin") {
            canRead = true;
            canWrite = true;
            canEdit = true;
            canDelete = true;
          } else {
            canRead = faker.datatype.boolean();
            canWrite = faker.datatype.boolean();
            canEdit = faker.datatype.boolean();
            canDelete = faker.datatype.boolean();
          }

          const permission = new PermissionModel({
            userId: user.id,
            resourceId: resource.id,
            canRead,
            canWrite,
            canEdit,
            canDelete,
          });

          await permission.save();
          permissionsUser.push(permission.id);
          counter++
        }

        user.permissions = permissionsUser;
        await user.save();
      }

     
      logger.info(`${counter} permissions seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed permissions: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllPermissions();
    await this.insertPermissions();
  };
}

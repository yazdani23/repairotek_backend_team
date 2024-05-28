import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import EmployeeModel from "../models/EmployeeModel";
import RoleModel from "../models/RoleModel";
import JobModel from "../models/JobModel";
import DepartmentModel from "../models/unUse/DepartmentModel";

export class EmployeeSeeder {
  static removeAllEmployees = async () => {
    try {
      await EmployeeModel.deleteMany({});
      logger.info("All employees removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove employees: " + error.message);
    }
  };

  static insertEmployees = async (batchSize = 10) => {
    try {
      const roles = await RoleModel.find({});
      const jobs = await JobModel.find({});
      // const departments = await DepartmentModel.find({});

      if (!roles.length || !jobs.length) {
        logger.error(
          "Please ensure that roles and jobs are populated before seeding employees."
        );
        return;
      }

      const employees = [];

      for (let i = 0; i < batchSize; i++) {
        // const role = faker.helpers.arrayElement(roles).id;
        // const job = faker.helpers.arrayElement(jobs).id;
        const role = roles[Math.floor(Math.random() * roles.length)];
        const job = jobs[Math.floor(Math.random() * jobs.length)];
        // const department =
        //   departments[Math.floor(Math.random() * departments.length)];

        employees.push({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          gender: faker.person.sex(),
          email: faker.internet.email(),
          address: faker.location.secondaryAddress(),
          telephone: faker.phone.number(),
          mobile: faker.phone.number(),
          profilePhoto: faker.image.avatar(),
          roleId: role.id,
          password: faker.internet.password(),
          lastActivity: faker.date.recent().getTime(),
          employeeCode: faker.number.int({ min: 10000 }),
          hireDate: faker.date.past(),
          jobId: job.id,
          skillDescription: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          nationalId: faker.number.int({ min: 1000000000, max: 9999999999 }), // Assuming national ID is a 10-digit number
          dateOfBirth: faker.date.past({
            years: 30,
            refDate: "2024-01-01T00:00:00.000Z",
          }), // Random date of birth in the past 30 years
          maritalStatus: faker.helpers.arrayElement([
            "Single",
            "Married",
            "Divorced",
            "Widowed",
          ]),
          yearsOfExperience: faker.number.int({ min: 1, max: 40 }),
          contractType: faker.helpers.arrayElement([
            "Permanent",
            "Temporary",
            "Contract",
          ]),
          bankAccountInfo: `
            Credit Card Number:${faker.finance.creditCardNumber(
              "63[7-9]#-####-####-###L"
            )}
            Accunt Number:${faker.finance.accountNumber()}
           `,
          insuranceNumber: faker.number
            .int({ min: 1000000000, max: 9999999999 })
            .toString(), // Assuming insurance number is a 10-digit number
          // departmentId: department.id,
        });
      }

      await EmployeeModel.insertMany(employees);
      logger.info(batchSize + " employees seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed employees: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllEmployees();
    await this.insertEmployees();
  };
}

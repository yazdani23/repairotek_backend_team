import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import TimeCardEmployeeModel from "../models/TimeCardEmployeeModel";
import EmployeeModel from "../models/EmployeeModel";
import TaskModel from "../models/TaskModel";
import UserModel from "../models/UserModel";

export class TimeCardEmployeeSeeder {
  static removeAllTimeCards = async () => {
    try {
      await TimeCardEmployeeModel.deleteMany({});
      logger.info("All time cards removed successfully.");
    } catch (error: any) {
      logger.error(`Failed to remove time cards: ${error.message}`);
    }
  };

  static fetchEmployeesTasksUsers = async () => {
    try {
      const employees = await EmployeeModel.find({});
      const tasks = await TaskModel.find({});
      const users = await UserModel.find({});
      return { employees, tasks, users };
    } catch (error: any) {
      logger.error(
        `Failed to fetch employees, tasks, or users: ${error.message}`
      );
      throw error;
    }
  };

  static insertTimeCards = async (batchSize = 10) => {
    try {
      const { employees, tasks, users } = await this.fetchEmployeesTasksUsers();

      if (employees.length === 0)
        throw new Error("No employees found in the database.");
      if (users.length === 0)
        throw new Error("No users found in the database.");

      const timeCards = [];

      for (let i = 0; i < employees.length; i++) {
        const randomEmployee =
          employees[Math.floor(Math.random() * employees.length)];
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomTask =
          tasks.length > 0
            ? tasks[Math.floor(Math.random() * tasks.length)]
            : null;

        const scheduledStartTime = faker.date.recent().toISOString();
        const scheduledEndTime = new Date(
          new Date(scheduledStartTime).getTime() + 8 * 60 * 60 * 1000
        ).toISOString();
        const actualStartTime = new Date(
          new Date(scheduledStartTime).getTime() +
            (Math.random() * 2 - 1) * 60 * 60 * 1000
        ).toISOString();
        const actualEndTime = new Date(
          new Date(actualStartTime).getTime() + 8 * 60 * 60 * 1000
        ).toISOString();

        timeCards.push({
          employeeId: randomEmployee.id,
          timeCardDate: faker.date.recent().toISOString(),
          scheduledStartTime,
          scheduledEndTime,
          actualStartTime,
          actualEndTime,
          scheduledOverTime: faker.number.int({ min: 0, max: 2 }),
          actualOverTime: faker.number.int({ min: 0, max: 2 }),
          scheduledRestTime: faker.number.int({ min: 0, max: 1 }),
          actualRestTime: faker.number.int({ min: 0, max: 1 }),
          wageRate: faker.number.float({
            min: 10,
            max: 50,
            multipleOf: 0.01,
          }),
          overTimePayRate: faker.number.float({
            min: 15,
            max: 75,
            multipleOf: 0.01,
          }),
          taskId: randomTask ? randomTask.id : null,
          createdBy: randomUser.id,
          updatedBy: randomUser.id,
        });
      }

      await TimeCardEmployeeModel.insertMany(timeCards);
      logger.info(`${timeCards.length} time cards seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed time cards: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllTimeCards();
    await this.insertTimeCards();
  };
}

import { Injectable } from '@nestjs/common';
import * as users from '../mockData/users.json';
import * as fs from 'fs/promises';

@Injectable()
export class UserService {
  private usersFilePath = 'src/mockData/users.json';

  constructor() {}

  async findAll() {
    return users;
  }

  async createUser(reqBody: any): Promise<any> {
    try {
      const readFile = await fs.readFile(this.usersFilePath, 'utf8');
      const usersData = JSON.parse(readFile);
      const existingUser = usersData?.data.some(
        (data) => data.userId === reqBody.userId,
      );
      if (existingUser) {
        return 'User already exists.';
      } else {
        const userData = reqBody;
        userData.password = this.generatePassword(reqBody.password);
        userData.type = 'user';
        usersData.data.push(userData);
      }

      await fs.writeFile(this.usersFilePath, JSON.stringify(usersData));

      return 'New user created. Please use your username to login.';
    } catch (error) {
      return 'Error occured while creating new user.';
    }
  }

  async login(reqBody: any): Promise<any> {
    try {
      reqBody.password = this.generatePassword(reqBody.password);
      const readFile = await fs.readFile(this.usersFilePath, 'utf8');
      const usersData = JSON.parse(readFile);
      let userCheck: string;
      for (const user of usersData.data || []) {
        if (
          user.userId === reqBody.userId &&
          user.password === reqBody.password
        ) {
          userCheck = 'Successful Login';
          break;
        } else if (
          user.userId !== reqBody.userId ||
          user.password !== reqBody.password
        ) {
          userCheck = 'Please check your username/password';
        }
      }
      return userCheck;
    } catch (error) {
      return 'Some error occurred.Please try again';
    }
  }

  generatePassword(password: string): string {
    return Buffer.from(password).toString('base64');
  }
}

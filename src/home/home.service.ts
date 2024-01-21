import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
@Injectable()
export class HomeService {
  private productsFilePath = 'src/mockData/products.json';
  constructor() {}

  async getHome() {
    try {
      const readFile = await fs.readFile(this.productsFilePath, 'utf8');
      return readFile;
    } catch (error) {
      return 'error occurred';
    }
  }
}

// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUserById(userId: string): Promise<any> {
    // Your logic to validate the user by ID (query database, etc.)
    //a Return user if valid, null otherwise
  }

  async login(user: any): Promise<{ access_token: string }> {
    const payload = { sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async generateKey(): Promise<string> {
    const crypto = require('crypto');

    function generateRandomKey(lengthInBytes) {
      return crypto.randomBytes(lengthInBytes).toString('hex');
    }

    // Generate a 256-bit (32-byte) key
    const secretKey = generateRandomKey(32);

    console.log('Generated Secret Key:', secretKey);

    return secretKey;
  }
}

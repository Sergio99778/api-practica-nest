import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signIn() {
    return 'I am signing in';
  }

  signUp() {
    return 'I am signing up';
  }
}

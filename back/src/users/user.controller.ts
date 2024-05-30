import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  @Get()
  async getAll(): Promise<any[]> {
    return [];
  }

  @Post()
  async createMultiple() {
    return;
  }

  @Post('create')
  async createOne() {
    return;
  }
}

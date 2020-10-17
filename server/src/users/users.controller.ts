import { Body, Controller, Get, Put, Delete, Logger, Post, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly _logger: Logger,
    private readonly _usersService: UsersService
  ) {
    this._logger.setContext(this.constructor.name);
  }

  @Post()
  public async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return this._usersService.createUser(createUserDto);
    } catch (error) {
      this._logger.error(error);
    }
  }

  @Get()
  public async getAllUsers(): Promise<User[]> {
    try {
      return this._usersService.getAllUsers();
    } catch (error) {
      this._logger.error(error);
    }
  }

  @Get(':id')
  public async getUserById(@Param('id') userId: number): Promise<User> {
    try {
      return this._usersService.getUserById(userId);
    } catch (error) {
      this._logger.error(error);
    }
  }

  @Put(':id')
  public async updateUserById(
      @Param('id') userId: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    try {
      return this._usersService.updateUserById(userId, updateUserDto);
    } catch (error) {
      this._logger.error(error);
    }
  }

  @Delete(':id')
  public async deleteUserById(@Param('id') userId: number): Promise<User> {
    try {
      return this._usersService.deleteUserById(userId);
    } catch (error) {
      this._logger.error(error);
    }
  }
}

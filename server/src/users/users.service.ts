import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageRequest } from 'src/common/models/pagination/page-request.model';
import { Page } from 'src/common/models/pagination/page.model';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserNotFoundException } from './exceptions/user-not-found.exception';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly _usersRepository: Repository<User>
  ) {}

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = this._usersRepository.create({
      ...createUserDto
    });
    return this._usersRepository.save(user);
  }

  public async getAllUsers(): Promise<User[]> {
    return this._usersRepository.find();
  }

  public async getAllUsersByPage(pageRequest: PageRequest): Promise<Page<User>> {
    const sort: {[key: string]: string} = pageRequest.sort.asKeyValue();
    const result = await this._usersRepository.findAndCount({
      order: sort,
      skip: ((pageRequest.page - 1) * pageRequest.size),
      take: pageRequest.size
    });
    return this._generatePageResult(result[0], result[1], pageRequest);
  }

  public async getUserById(userId: number): Promise<User> {
    const user: User = await this._usersRepository.findOne(userId);
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  public async updateUserById(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = await this._usersRepository.findOne(userId);
    if (!user) {
      throw new UserNotFoundException();
    }
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.email = updateUserDto.email;
    return this._usersRepository.save(user);
  }

  public async deleteUserById(userId: number): Promise<User> {
    const user: User = await this._usersRepository.findOne(userId);
    if (!user) {
      throw new UserNotFoundException();
    }
    this._usersRepository.delete(user);
    return user;
  }

  private async _generatePageResult(elements: User[], totalElements: number, pageRequest: PageRequest): Promise<Page<User>> {
    return new Page<User>({
      elements: elements, 
      totalElements: totalElements, 
      totalPages: Math.ceil(totalElements / pageRequest.size),
      current: pageRequest,
      next: pageRequest.next(totalElements),
      previous: pageRequest.previous(totalElements)
    });
  }
}

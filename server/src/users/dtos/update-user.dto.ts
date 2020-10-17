import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  public id: number;

  @IsNotEmpty()
  public firstName: string;

  @IsNotEmpty()
  public lastName: string;
  
  @IsNotEmpty()
  @IsEmail()
  public email: string;
}

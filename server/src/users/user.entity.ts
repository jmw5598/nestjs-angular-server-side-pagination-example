import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public firstName: String;

  @Column({ nullable: false })
  public lastName: String;

  @Column({ nullable: false })
  public email: String;
}

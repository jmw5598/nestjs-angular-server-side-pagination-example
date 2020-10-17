import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

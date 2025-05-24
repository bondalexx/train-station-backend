import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TrainsModule } from './trains/trains.module';

@Module({
  imports: [AuthModule, UsersModule, TrainsModule],
})
export class AppModule {}
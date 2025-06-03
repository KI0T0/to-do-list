import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  providers: [TasksService], // insira no providers o(s) Service(s)
  controllers: [TasksController]
})
export class TasksModule {}

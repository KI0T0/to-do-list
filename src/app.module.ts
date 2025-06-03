import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module'; // é necessário importar todos os módulos no topo para depois importar no corpo

@Module({ // no código, é possível ter mais de um módulo, por isso importamos todos eles no app.module.ts
  imports: [TasksModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module'; // é necessário importar todos os módulos no topo para depois importar no corpo
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({ // no código, é possível ter mais de um módulo, por isso importamos todos eles no app.module.ts
  imports: [TasksModule,
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: 'todo_list',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // só use true em dev, cria tabelas automaticamente
    })]
})
export class AppModule {}

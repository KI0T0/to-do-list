import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/cria-tarefa.dto';

@Injectable()
export class TasksService {
    private tasks: any[] = [];

    create(task: CreateTaskDto) {
        const newTask = { id: Date.now(), ...task};
        this.tasks.push(newTask);
        return newTask;
    }

    findAll() { 
        return this.tasks;
    }
}

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable() // isso significa que essa classe será "injetada" dentro da Controller
export class TasksService {
    private tasks: Tasks<TasksService>;

    create(task: CreateTaskDto) {
        const newTask = { id: Date.now(), ...task};
        this.tasks.push(newTask);
        return newTask;
    }

    findAll() { 
        return this.tasks;
    }
}

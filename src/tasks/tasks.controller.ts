import { Controller, Post, Body, Get } from '@nestjs/common'; //importa as 'ações' (Decorators) da biblioteca Nest
import { TasksService } from './tasks.service'; //importa o serviço
import { CreateTaskDto } from './dto/cria-tarefa.dto'; //importa o arquivo dto

@Controller('tasks') //podemos ter diversos "Controller"; essa específica é a controller ativada quando a pessoa acessar /tarefas no nosso site
export class TasksController { //exporta o controller para ser usado em outros locais
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) { 
        return this.tasksService.create(createTaskDto);
    }


    @Get()
    findAll() { //busca tudo
        return this.tasksService.findAll();
    }
}
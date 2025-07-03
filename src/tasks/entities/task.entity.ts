import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks') // o nome da tabela no banco será "tasks"
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: false })
  completed: boolean;
}

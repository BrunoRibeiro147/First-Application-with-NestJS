import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'exercicio' })
export class Exercicio {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column()
  aula: string;
}

import { Module } from '@nestjs/common';
import { ExercicioController } from './controllers/exercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercicio } from './models/exercicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercicio])],
  controllers: [ExercicioController],
})
export class ExercicioModule {}

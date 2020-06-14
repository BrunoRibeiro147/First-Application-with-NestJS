import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercicio } from '../models/exercicio.entity';

@Controller('exercicio')
export class ExercicioController {
  constructor(
    @InjectRepository(Exercicio)
    private maratonaRepository: Repository<Exercicio>,
  ) {}

  @Get()
  async index() {
    return await this.maratonaRepository.find();
  }

  @Post()
  async store(@Req() request: Request) {
    const exercicio = this.maratonaRepository.create(request.body as any);
    await this.maratonaRepository.save(exercicio);
    return exercicio;
  }
}

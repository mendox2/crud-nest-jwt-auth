import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>
  ){  }

  async create(createCatDto: CreateCatDto) {
    return await this.catRepository.save(createCatDto);
  }

  async findAll() {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOneBy({id});
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return await this.catRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    return await this.catRepository.softDelete({ id }); //* Se le pasa el id  
    // return await this.catRepository.softRemove(); //* Se le pasa la instancia
  }
}

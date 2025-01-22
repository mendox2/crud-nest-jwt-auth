import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BreedsService {

  constructor(

    @InjectRepository(Breed)
    private readonly  breedRepository: Repository<Breed>,

  ) { }

  async create(createBreedDto: CreateBreedDto) {
    return await this.breedRepository.save(createBreedDto);
  }

  async findAll() {
    return await `This action returns all breeds`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} breed`;
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    return await `This action updates a #${id} breed`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} breed`;
  }
}

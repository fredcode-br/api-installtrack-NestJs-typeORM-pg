import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FactoryEntity } from './factory.entity';
import { Repository } from 'typeorm';
import { FactoryListDTO } from './dto/FactoryListDTO';

@Injectable()
export class FactoriesService {
  constructor(
    @InjectRepository(FactoryEntity)
    private readonly factoryRepository: Repository<FactoryEntity>,
  ) {}

  async findFactories() {
    const savedFactories = await this.factoryRepository.find();
    const factoriesList = savedFactories.map(
      (factory) =>
        new FactoryListDTO(
          factory.id,
          factory.name,
          factory.country,
          factory.state,
          factory.city,
        ),
    );

    return factoriesList;
  }
}

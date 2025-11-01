import { Body, Controller, Get } from '@nestjs/common';
import { FactoriesService } from './factories.service';
// import { CreateFactoryDTO } from './dto/CreateFactory.dto';
// import { FactoryEntity } from './factory.entity';
// import { v4 as uuid } from 'uuid';
import { Response } from 'express';
// import { FactoriesRepository } from './factories.repository';

@Controller('factories')
export class FactoriesController {
  constructor(
    private factoriesService: FactoriesService,
    // private factoryRepository: FactoriesRepository,
  ) {}

  @Get()
  async listFactories() {
    const savedFactories = await this.factoriesService.findFactories();

    return savedFactories;
  }

  // @Post()
  // async createFactory(@Body() factoryData: CreateFactoryDTO) {
  //   const factoryEntity = new FactoryEntity();
  //   factoryEntity.id = uuid();
  //   factoryEntity.name = factoryData.name;
  //   factoryEntity.country = factoryData.country;
  //   factoryEntity.state = factoryData.state;
  //   factoryEntity.city = factoryData.city;

  //   this.factoryRepository.save(factoryEntity);

  //   return 0;
  // }
}

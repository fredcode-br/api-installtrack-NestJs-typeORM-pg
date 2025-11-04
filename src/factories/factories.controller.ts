import { Body, Controller, Get } from '@nestjs/common';
import { FactoriesService } from './factories.service';
import { CreateFactoryDTO } from './dto/CreateFactory.dto';
import { FactoryEntity } from './factory.entity';
import { v4 as uuid } from 'uuid';
import { FactoriesRepository } from './factories.repository';
import { FactoryListDTO } from './dto/FactoryListDTO';

@Controller('factories')
export class FactoriesController {
  constructor(
    private factoriesService: FactoriesService,
    private factoryRepository: FactoriesRepository,
  ) {}

  @Get()
  async listFactories() {
    const savedFactories = await this.factoriesService.findFactories();

    return savedFactories;
  }

  @Post()
  async createFactory(@Body() factoryData: CreateFactoryDTO) {
    const factory = new FactoryEntity();

    factory.id = uuid();
    factory.name = factoryData.name;
    factory.country = factoryData.country;
    factory.state = factoryData.state;
    factory.city = factoryData.city;

    const createdFactory = this.factoryRepository.save(factory);

    return {
      factory: new FactoryListDTO(
        createdFactory.id,
        createdFactory.name,
        createdFactory.country,
        createdFactory.state,
        createdFactory.city,
      ),
      message: 'Successfully created factory.',
    };
  }
}

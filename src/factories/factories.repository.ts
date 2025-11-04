import { Injectable } from '@nestjs/common';
import { FactoryEntity } from './factory.entity';

@Injectable()
export class FactoriesRepository {
  private factories: FactoryEntity[] = [];

  save(factory: FactoryEntity) {
    this.factories.push(factory);
    return factory;
  }
}

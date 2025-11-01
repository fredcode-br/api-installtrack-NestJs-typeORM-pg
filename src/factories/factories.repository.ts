import { Injectable } from '@nestjs/common';
import { FactoryEntity } from './factory.entity';

@Injectable()
export class FactoriesRepository {
  private factories: FactoryEntity[] = [];

  //   async save(factory: FactoryEntity) {
  //     this.factories.push(factory);
  //   }

  //   async list() {
  //     return this.factories;
  //   }
}

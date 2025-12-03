import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactoryEntity } from './factory.entity';

@Injectable()
export class FactoriesRepository {
  constructor(
    @InjectRepository(FactoryEntity)
    private readonly repository: Repository<FactoryEntity>,
  ) {}

  async save(factory: FactoryEntity): Promise<FactoryEntity> {
    return await this.repository.save(factory);
  }
}

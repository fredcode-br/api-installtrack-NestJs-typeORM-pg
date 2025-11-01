import { Module } from '@nestjs/common';
import { FactoriesController } from './factories.controller';
import { FactoriesService } from './factories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactoryEntity } from './factory.entity';
import { FactoriesRepository } from './factories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FactoryEntity])],
  controllers: [FactoriesController],
  providers: [FactoriesService, FactoriesRepository],
})
export class FactoriesModule {}

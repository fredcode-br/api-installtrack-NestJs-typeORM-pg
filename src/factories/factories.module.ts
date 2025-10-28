import { Module } from '@nestjs/common';
import { FactoriesController } from './factories.controller';
import { FactoriesService } from './factories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactoryEntity } from './factory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactoryEntity])],
  controllers: [FactoriesController],
  providers: [FactoriesService],
})
export class FactoriesModule {}

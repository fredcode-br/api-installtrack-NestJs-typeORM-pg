import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FactoriesService } from './factories.service';

@Controller('factories')
export class FactoriesController {
  constructor(private factoriesService: FactoriesService) {}

  @Get()
  async listFactories() {}

  @Post()
  async createFactory() {}

  @Get('/:id')
  async getFactory() {}

  @Put('/:id')
  async updateFactory() {}

  @Delete('/:id')
  async deleteFactory() {}
}

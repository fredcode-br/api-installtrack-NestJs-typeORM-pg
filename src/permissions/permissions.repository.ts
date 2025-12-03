import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionEntity } from './permission.entity';

@Injectable()
export class PermissionsRepository {
  constructor(
    @InjectRepository(PermissionEntity)
    private readonly repository: Repository<PermissionEntity>,
  ) {}

  async save(permission: PermissionEntity): Promise<PermissionEntity> {
    return await this.repository.save(permission);
  }
}

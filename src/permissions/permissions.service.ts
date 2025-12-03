import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from './permission.entity';
import { Repository } from 'typeorm';
import { PermissionListDTO } from './dto/PermissionList.dto';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(PermissionEntity)
    private readonly permissionRepository: Repository<PermissionEntity>,
  ) {}

  async findPermissions() {
    const savedPermissions = await this.permissionRepository.find();
    const permissionsList = savedPermissions.map(
      (permission) =>
        new PermissionListDTO(
          permission.id,
          permission.name,
          permission.description,
        ),
    );

    return permissionsList;
  }
}

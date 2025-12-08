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

  async findPermission(id: string) {
    const savedPermission = await this.permissionRepository.findOneBy({
      id,
    });

    if (!savedPermission) {
      throw new Error('Permission not found');
    }

    const permission = new PermissionListDTO(
      savedPermission.id,
      savedPermission.name,
      savedPermission.description,
    );

    return permission;
  }
  async create(permissionData: PermissionEntity) {
    return await this.permissionRepository.save(permissionData);
  }

  async update(id: string, permissionData: Partial<PermissionEntity>) {
    await this.permissionRepository.update(id, permissionData);

    const updatedPermission = await this.permissionRepository.findOne({
      where: { id },
    });

    if (!updatedPermission) {
      throw new Error('Permission not found');
    }

    const permission = new PermissionListDTO(
      updatedPermission.id,
      updatedPermission.name,
      updatedPermission.description,
    );

    return permission;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsRepository } from './permissions.repository';
import { CreatePermissionDTO } from './dto/CreatePermission.dto';
import { v4 as uuid } from 'uuid';
import { PermissionEntity } from './permission.entity';
import { PermissionListDTO } from './dto/PermissionList.dto';

@Controller('permissions')
export class PermissionsController {
  constructor(
    private permissionsService: PermissionsService,
    private permissionsRepository: PermissionsRepository,
  ) {}

  @Get()
  async listPermissions() {
    const savedPermissions = await this.permissionsService.findPermissions();

    return savedPermissions;
  }

  @Post()
  async createPermission(@Body() permissionData: CreatePermissionDTO) {
    const permission = new PermissionEntity();

    permission.id = uuid();
    permission.name = permissionData.name;
    permission.description = permissionData.description;

    console.log(permissionData);
    const createdPermission = await this.permissionsRepository.save(permission);

    return {
      permission: new PermissionListDTO(
        createdPermission.id,
        createdPermission.name,
        createdPermission.description,
      ),
      message: 'Successfully created permission.',
    };
  }
}

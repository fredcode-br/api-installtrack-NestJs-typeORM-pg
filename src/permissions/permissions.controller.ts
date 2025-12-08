import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDTO } from './dto/CreatePermission.dto';
import { v4 as uuid } from 'uuid';
import { PermissionEntity } from './permission.entity';
import { PermissionListDTO } from './dto/PermissionList.dto';
import { UpdatePermissionDTO } from './dto/UpdatePermission.dto';

@Controller('permissions')
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {}

  @Get()
  async listPermissions() {
    const savedPermissions = await this.permissionsService.findPermissions();

    return savedPermissions;
  }

  @Get('/:id')
  async listPermissionById(@Param('id') id: string) {
    const permission = await this.permissionsService.findPermission(id);

    return permission;
  }

  @Post()
  async createPermission(@Body() permissionData: CreatePermissionDTO) {
    const permission = new PermissionEntity();

    permission.id = uuid();
    permission.name = permissionData.name;
    permission.description = permissionData.description;

    console.log(permissionData);
    const createdPermission = await this.permissionsService.create(permission);

    return {
      permission: new PermissionListDTO(
        createdPermission.id,
        createdPermission.name,
        createdPermission.description,
      ),
      message: 'Successfully created permission.',
    };
  }

  @Put('/:id')
  async updatePermission(
    @Param('id') id: string,
    @Body() permissionData: UpdatePermissionDTO,
  ) {
    const permissionChanged = await this.permissionsService.update(
      id,
      permissionData,
    );

    return {
      mensagem: 'Permission changed successfully.',
      produto: permissionChanged,
    };
  }
}

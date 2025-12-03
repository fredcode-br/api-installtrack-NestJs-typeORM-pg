import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePermissionDTO {
  @IsString()
  @IsNotEmpty({ message: 'Permission name cannot be empty' })
  @MaxLength(100, {
    message: 'The permission name cannot be longer than 100 characters.',
  })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Permission description cannot be empty' })
  @MaxLength(300, {
    message: 'The permission description cannot be longer than 300 characters.',
  })
  description: string;
}

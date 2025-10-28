import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateFactoryDTO {
  @IsUUID(undefined, { message: 'Invalid factory ID' })
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'Factory name cannot be empty' })
  @MaxLength(100, {
    message: 'The factory name cannot be longer than 100 characters.',
  })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Factory country cannot be empty' })
  @MaxLength(100, {
    message: 'The factory country cannot be longer than 100 characters.',
  })
  country: string;

  @IsString()
  @IsNotEmpty({ message: 'Factory state cannot be empty' })
  @MaxLength(100, {
    message: 'The factory state cannot be longer than 100 characters.',
  })
  state: string;

  @IsString()
  @IsNotEmpty({ message: 'Factory city cannot be empty' })
  @MaxLength(100, {
    message: 'The factory city cannot be longer than 100 characters.',
  })
  city: string;
}

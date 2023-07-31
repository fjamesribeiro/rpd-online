import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from '../../user/dto/create-user.dto';

export class CreatePacienteDto extends CreateUserDto {
  @IsNotEmpty()
  psicologoId: number;
}

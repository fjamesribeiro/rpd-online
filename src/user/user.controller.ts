import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('paciente')
  async findAllPacientes() {
    return await this.userService.findAllPacientes();
  }

  @Get('paciente/:id')
  async findPacientesbyPsicologo(@Param('id') id: number) {
    return await this.userService.findPacientesbyPsicologoId(+id);
  }

  @Get('psicologo')
  async findAllPsicologos() {
    return await this.userService.findAllPsicologos();
  }

  @Delete(':email')
  async remove(@Param('email') email: string) {
    return await this.userService.deleteByEmail(email);
  }
}

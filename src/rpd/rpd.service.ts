import { Injectable } from '@nestjs/common';
import { CreateRpdDto } from './dto/create-rpd.dto';
import { UpdateRpdDto } from './dto/update-rpd.dto';

@Injectable()
export class RpdService {
  create(createRpdDto: CreateRpdDto) {
    return 'This action adds a new rpd';
  }

  findAll() {
    return `This action returns all rpd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rpd`;
  }

  update(id: number, updateRpdDto: UpdateRpdDto) {
    return `This action updates a #${id} rpd`;
  }

  remove(id: number) {
    return `This action removes a #${id} rpd`;
  }
}

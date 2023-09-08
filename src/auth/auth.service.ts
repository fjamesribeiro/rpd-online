import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private user: UserService) {}

  async validateUser(req) {
    const user = await this.user.findbyEmail(req.email);

    //cadasta os dados do usuario que acessa pela 1 vez
    if (user && user.nome == null) {
      const dto: UpdateUserDto = {
        nome: req.fistName,
        sobrenome: req.lastName,
        urlFoto: req.picture,
      };
      await this.user.update(user.id, dto);
    }

    return user || null;
  }
}

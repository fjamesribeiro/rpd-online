import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private user: UserService) { }

  async validateUser(req) {
    const user = await this.user.findbyEmail(req.email);
    if (user) {
      return user || null;
    }
  }
}

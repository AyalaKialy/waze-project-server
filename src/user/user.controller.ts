import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  getAll() {
    return [{ id: 1, 'name': 'root', 'email': 'root@example.com' }, { id: 2, 'name': 'tamar', 'email': 'tamar@example.com' }];
  }
}

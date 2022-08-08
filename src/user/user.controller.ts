import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Post()
  createUser(@Body() newUser: User) {
    this.userService.createUser(newUser);
  }

  @Put(':id')
  updateUser(@Param('id') userId: string, @Body() updateUser: User) {
    this.userService.updateUser(userId, updateUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    this.userService.deleteUser(userId);
  }

  @Get(':id')
  getUserById(@Param('id') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Get()
  getAll() {
    return this.userService.getUsers();
  }

}

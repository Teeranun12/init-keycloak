import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserInput } from "./model/create-user.input";

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() input: CreateUserInput) {
    const user = await this.userService.createUser(input);

    return user;
  }
}

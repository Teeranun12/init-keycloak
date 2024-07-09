import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateUserInput } from "./model/create-user.input";
import { KeycloakService } from "src/infrastructure/keycloak/keycloak.service";
import { LogingUserInput } from "./model/login-user.input";
import { Public, Roles } from "nest-keycloak-connect";

@ApiTags("users")
@ApiBearerAuth()
@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly keycloakService: KeycloakService
  ) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() input: CreateUserInput) {
    const user = await this.userService.createUser(input);

    return user;
  }

  @Roles({
    roles: [`DPID:ITADMIN`],
  })
  @Post('/login')
  async login(@Body() input: LogingUserInput) {
    const data = await this.keycloakService.login(input.email,input.password );

    const token = data.access_token;
    
    console.log("token = ", token);

   return data;
  }
}

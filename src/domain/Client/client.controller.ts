import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ClientService } from "./client.service";
import path from "path";

@ApiTags("clients")
@Controller("client")
export class ClientController {
  constructor(private readonly clientservice: ClientService) {}

  @Get()
  async getClients() {
    return await this.clientservice.getClients();
  }
}

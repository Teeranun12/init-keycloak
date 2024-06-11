import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ClientService } from "./client.service";
// TODO: Remove this import and use patth
import path from "path";
import { CreateClientInput } from "./model/create-client.input";
import { UpdateClientInput } from "./model/update-client.input";
import { SearchClientInput } from "./model/search-client.input";

@ApiTags("clients")
@Controller("client")
export class ClientController {
  constructor(private readonly clientservice: ClientService) {}

  @Get("getClients")
  async getClients() {
    return await this.clientservice.getClients();
  }

  @Post("createClients")
  async createClients(@Body() input: CreateClientInput) {
    const client = await this.clientservice.createClients(input);
    //TODO: spaces
    return client;
  }

  @Patch("updateBooks")
  async updateBooks(@Body() input: UpdateClientInput) {
    const client = await this.clientservice.updateClients(input);
    //TODO: spaces
    return client;
  }

  @Get("searchClients")
  async searchClients(@Body() input: SearchClientInput) {
    return await this.clientservice.searchClients(input);
  }
}

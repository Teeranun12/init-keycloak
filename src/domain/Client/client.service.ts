import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "./entity/client.entity";
import { CreateClientInput } from "./model/create-client.input";
import { first, last } from "rxjs";
import { UpdateClientInput } from "./model/update-client.input";
import { SearchClientInput } from "./model/search-client.input";
// TODO: Remove this unused import
// TODO: remove unused functions

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private repo: Repository<Client>
  ) {}
  async getClients() {
    const res = await this.repo.find();
    console.log("res = ", res);

    return res;
  }

  async createClients(request: CreateClientInput) {
    const newClient = {
      first_name: request.first_name,
      last_name: request.last_name,
      phone: request.phone,
    };

    return this.repo.save(newClient);
  }

  async updateClients(request: UpdateClientInput) {
    const existingClient = await this.repo.findOne({
      where: { id: request.id },
    });

    const updatedClient = {
      first_name: request.first_name,
      last_name: request.last_name,
      phone: request.phone,
    };

    await this.repo.update(request.id, updatedClient);
    return this.repo.findOne({ where: { id: request.id } });
  }

  async searchClients(request: SearchClientInput) {
    const existingClient = await this.repo.find({
      where: { first_name: request.first_name },
    });
    return existingClient;
  }
}

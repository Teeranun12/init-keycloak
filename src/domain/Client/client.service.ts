import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "./entity/client.controller";

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
}

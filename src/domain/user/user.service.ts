import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserInput } from "./model/create-user.input";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>
  ) {}
  async getUsers() {
    const res = await this.repo.find();
    console.log("res = ", res);

    return res;
  }

  async createUser(request: CreateUserInput) {
    const user = {
      first_name: request.first_name,
      last_name: request.last_name,
      email: request.email,
    };

    return this.repo.save(user);
  }
}

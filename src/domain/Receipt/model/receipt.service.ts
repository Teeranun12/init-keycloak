import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Receipt } from "../entity/receipt.entity";

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private repo: Repository<Receipt>
  ) {}
  async getReceipts() {
    const res = await this.repo.find();
    console.log("res = ", res);

    return res;
  }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Receipt } from "./entity/receipt.entity";
import { CreateReceiptInput } from "./model/create-receipt.input";
import { EditStatusReceiptInput } from "./model/edit-receipt.input";

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

  async createReceipts(request: CreateReceiptInput) {
    const newReceipt = {
      reserve_code: request.reserve_code,
      reserve_status: request.reserve_status,
      reserve_date: new Date(),
      reserve_end: request.reserve_end,
      client_id: request.client_id,
      book_id: request.book_id,
    };

    return this.repo.save(newReceipt);
  }

  async editStatusReceipts(request: EditStatusReceiptInput) {
    const existingReceipt = await this.repo.findOne({
      where: { id: request.id },
    });
    // TODO: remove unused const
    const updateReceipt = {
      reserve_status: request.reserve_status,
      updated_at: new Date(),
    };

    await this.repo.update(request.id, updateReceipt);
    return this.repo.findOne({ where: { id: request.id } });
  }
}

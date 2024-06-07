import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ReceiptService } from "./receipt.service";

@ApiTags("receipts")
@Controller("receipt")
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Get()
  async getReceipts() {
    return await this.receiptService.getReceipts();
  }
}

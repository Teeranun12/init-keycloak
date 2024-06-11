import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ReceiptService } from "./receipt.service";
import { CreateReceiptInput } from "./model/create-receipt.input";
import { EditStatusReceiptInput } from "./model/edit-receipt.input";

@ApiTags("receipts")
@Controller("receipt")
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Get("getAllReceipts")
  async getReceipts() {
    return await this.receiptService.getReceipts();
  }

  @Post("createReceipts")
  async createReceipts(@Body() input: CreateReceiptInput) {
    const receipt = await this.receiptService.createReceipts(input);
    return receipt;
  }

  @Patch("editStatus")
  async editStatusReceipts(@Body() input: EditStatusReceiptInput) {
    const receipt = await this.receiptService.editStatusReceipts(input);
    return receipt;
  }
}

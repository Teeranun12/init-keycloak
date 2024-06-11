import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Receipt } from "./entity/receipt.entity";
import { ReceiptService } from "./receipt.service";
import { ReceiptController } from "./receipt.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Receipt])],
  controllers: [ReceiptController],
  providers: [ReceiptService],
  exports: [ReceiptService],
})
export class ReceiptModule {}

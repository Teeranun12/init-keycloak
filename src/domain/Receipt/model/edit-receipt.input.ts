import { ApiProperty } from "@nestjs/swagger";

export class EditStatusReceiptInput {
  @ApiProperty({
    example: "1",
  })
  readonly id: string;

  @ApiProperty({
    example: "reserve_status",
  })
  readonly reserve_status: string;

  @ApiProperty({
    example: "Date",
  })
  readonly updated_at: Date;
}

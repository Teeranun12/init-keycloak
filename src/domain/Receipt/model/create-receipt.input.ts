import { ApiProperty } from "@nestjs/swagger";

export class CreateReceiptInput {
  @ApiProperty({
    example: "1",
  })
  readonly id: string;

  @ApiProperty({
    example: "reserve_code",
  })
  readonly reserve_code: string;

  @ApiProperty({
    example: "reserve_status",
  })
  readonly reserve_status: string;

  @ApiProperty({
    example: "Date",
  })
  readonly reserve_date: Date;

  @ApiProperty({
    example: "Date",
  })
  readonly reserve_end: Date;

  @ApiProperty({
    example: "1",
  })
  readonly client_id: string;

  @ApiProperty({
    example: "1",
  })
  readonly book_id: string;
}

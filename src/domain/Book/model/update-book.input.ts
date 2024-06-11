import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookInput {
  @ApiProperty({
    example: "1",
  })
  readonly id: number;

  @ApiProperty({
    example: "book1",
  })
  readonly book_name: string;

  @ApiProperty({
    example: "horror",
  })
  readonly book_category: string;

  @ApiProperty({
    example: "author1",
  })
  readonly book_author: string;

  @ApiProperty({
    example: "available",
  })
  readonly book_status: string;

  @ApiProperty({
    example: "Date",
  })
  readonly updated_at: Date;
}

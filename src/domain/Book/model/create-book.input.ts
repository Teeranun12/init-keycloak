import { ApiProperty } from "@nestjs/swagger";

export class CreateBookInput {
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
    example: "Date",
  })
  readonly created_at: Date;

  @ApiProperty({
    example: "available",
  })
  readonly book_status: string;
}

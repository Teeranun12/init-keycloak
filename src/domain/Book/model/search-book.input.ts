import { ApiProperty } from "@nestjs/swagger";

export class SearchBookInput {
  @ApiProperty({
    example: "book1",
  })
  readonly book_name: string;
}

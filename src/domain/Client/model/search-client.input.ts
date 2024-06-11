import { ApiProperty } from "@nestjs/swagger";

export class SearchClientInput {
  @ApiProperty({
    example: "first_name",
  })
  readonly first_name: string;
}

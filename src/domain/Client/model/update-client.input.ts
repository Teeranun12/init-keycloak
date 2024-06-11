import { ApiProperty } from "@nestjs/swagger";

export class UpdateClientInput {
  @ApiProperty({
    example: "1",
  })
  readonly id: number;

  @ApiProperty({
    example: "first_name",
  })
  readonly first_name: string;

  @ApiProperty({
    example: "last_name",
  })
  readonly last_name: string;

  @ApiProperty({
    example: "phone",
  })
  readonly phone: string;
}

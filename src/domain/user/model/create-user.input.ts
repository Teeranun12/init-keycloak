import { ApiProperty } from "@nestjs/swagger";

export class CreateUserInput {
  @ApiProperty({
    example: "1",
  })
  readonly id: string;

  @ApiProperty({
    example: "first_name",
  })
  readonly first_name: string;

  @ApiProperty({
    example: "last_name",
  })
  readonly last_name: string;

  @ApiProperty({
    example: "email",
  })
  readonly email: string;
}

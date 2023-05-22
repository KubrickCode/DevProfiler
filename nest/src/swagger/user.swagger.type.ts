import { ApiProperty } from '@nestjs/swagger';

class UserPros {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  provider: string;
}

export { UserPros };

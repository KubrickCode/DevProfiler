import { ApiProperty } from '@nestjs/swagger';

class UserProps {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  provider: string;
}

export { UserProps };

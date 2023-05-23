import { ApiProperty } from '@nestjs/swagger';

class MessageProps {
  @ApiProperty()
  message: string;
}

export { MessageProps };

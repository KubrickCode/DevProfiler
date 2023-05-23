import { ApiResponseOptions } from '@nestjs/swagger';
import { MessageProps } from './global.swagger.type';

const MessageResponse = (
  status: number,
  description: string,
): ApiResponseOptions => ({
  description,
  status,
  type: MessageProps,
});

export { MessageResponse };

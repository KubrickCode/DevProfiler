import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

class SurveyProps {
  @ApiProperty()
  id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty({ enum: Category })
  category: Category;

  @ApiProperty({
    type: 'number',
    isArray: true,
    description: '배열의 길이는 25',
  })
  response: number[];
}

export { SurveyProps };

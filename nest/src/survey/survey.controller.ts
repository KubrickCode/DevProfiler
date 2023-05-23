import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './survey.dto';
import { UpdateSurveyDto } from './survey.dto';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetSurveyResponse } from '../swagger/survey.swagger';
@ApiTags('Survey')
@Controller('survey')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @ApiOperation({ summary: '검사 결과 제공' })
  @ApiResponse(GetSurveyResponse)
  @Get()
  async getSurveyController(@Req() req: RequestUser) {
    return await this.surveyService.getSurveyService(req.user.id);
  }

  @ApiOperation({ summary: '검사 결과 저장' })
  @Post()
  async createSurveyController(
    @Req() req: RequestUser,
    @Body() createSurveyDto: CreateSurveyDto,
  ) {
    await this.surveyService.createSurveyService(req.user.id, createSurveyDto);
    return { message: '검사 결과 저장 성공' };
  }

  @ApiOperation({ summary: '검사 결과 업데이트' })
  @Patch()
  async updateSurveyController(@Body() updateSurveyDto: UpdateSurveyDto) {
    await this.surveyService.updateSurveyService(updateSurveyDto);
    return { message: '검사 결과 업데이트 성공' };
  }

  @ApiOperation({ summary: '검사 결과 삭제' })
  @Delete(':id')
  async deleteSurveyController(@Param('id') id: string) {
    await this.surveyService.deleteSurveyService(Number(id));
    return { message: '검사 결과 삭제 성공' };
  }
}

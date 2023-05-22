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
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Survey')
@Controller('survey')
@UseGuards(JwtAuthGuard)
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @Get()
  async getSurveyController(@Req() req: RequestUser) {
    return await this.surveyService.getSurveyService(req.user.id);
  }

  @Post()
  async createSurveyController(
    @Req() req: RequestUser,
    @Body() createSurveyDto: CreateSurveyDto,
  ) {
    return await this.surveyService.createSurveyService(
      req.user.id,
      createSurveyDto,
    );
  }

  @Patch()
  async updateSurveyController(@Body() updateSurveyDto: UpdateSurveyDto) {
    return await this.surveyService.updateSurveyService(updateSurveyDto);
  }

  @Delete(':id')
  async deleteSurveyController(@Param('id') id: string) {
    return await this.surveyService.deleteSurveyService(Number(id));
  }
}

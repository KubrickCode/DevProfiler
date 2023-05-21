import { Test, TestingModule } from '@nestjs/testing';
import { SurveyService } from './survey.service';
import { SurveyRepository } from './survey.repository';
import { CreateSurveyDto, UpdateSurveyDto } from './survey.dto';
import { Survey } from '@prisma/client';

describe('SurveyService', () => {
  let service: SurveyService;
  let repository: SurveyRepository;

  beforeEach(async () => {
    const repositoryMock = {
      create: jest.fn(),
      get: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      deleteAllByUserId: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SurveyService,
        { provide: SurveyRepository, useValue: repositoryMock },
      ],
    }).compile();

    service = module.get<SurveyService>(SurveyService);
    repository = module.get<SurveyRepository>(SurveyRepository);
  });

  it('create survey service', async () => {
    const userId = 1;
    const survey: CreateSurveyDto = {
      category: 'FrontEnd',
      response: Array(25).fill(0),
    };

    jest.spyOn(repository, 'create').mockResolvedValueOnce(survey as Survey);

    const result = await service.createSurveyService(userId, survey);

    expect(result).toEqual(survey);
    expect(repository.create).toHaveBeenCalledWith(survey);
  });

  it('get survey service', async () => {
    const userId = 1;
    jest.spyOn(repository, 'get').mockResolvedValueOnce([] as Survey[]);

    const result = await service.getSurveyService(userId);

    expect(result).toEqual([]);
    expect(repository.get).toHaveBeenCalledWith(userId);
  });

  it('update survey service', async () => {
    const survey: UpdateSurveyDto = {
      id: 1,
      response: Array(25).fill(0),
    };

    jest.spyOn(repository, 'update').mockResolvedValueOnce(survey as Survey);

    const result = await service.updateSurveyService(survey);

    expect(result).toEqual(survey);
    expect(repository.update).toHaveBeenCalledWith(survey);
  });

  it('delete survey service', async () => {
    const surveyId = 1;

    jest.spyOn(repository, 'delete').mockResolvedValueOnce({} as Survey);

    const result = await service.deleteSurveyService(surveyId);

    expect(result).toEqual({});
    expect(repository.delete).toHaveBeenCalledWith(surveyId);
  });
});

import { SurveyRepository } from './survey.repository';
import { PrismaService } from '../prisma.service';
import { Survey } from '@prisma/client';

describe('SurveyRepository', () => {
  let surveyRepository: SurveyRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = new PrismaService();
    surveyRepository = new SurveyRepository(prismaService);
  });

  it.only('createSurveyRepository', async () => {
    const mockData: Omit<Survey, 'id'> = {
      user_id: 6,
      category: 'FrontEnd',
      response: Array(25).fill(3),
    };
    const result = await surveyRepository.create(mockData);
    expect(result.user_id).toEqual(mockData.user_id);
    expect(result.category).toEqual(mockData.category);
    expect(result.response).toEqual(mockData.response);
  });

  it('getSurveyRepository', async () => {
    const mockUserId = 3;
    const result = await surveyRepository.get(mockUserId);
    expect(result[0].user_id).toEqual(mockUserId);
  });

  it('updateSurveyRepository', async () => {
    const mockData: Pick<Survey, 'id' | 'response'> = {
      id: 1,
      response: Array(25).fill(4),
    };
    const result = await surveyRepository.update(mockData);
    expect(result.id).toEqual(mockData.id);
    expect(result.response).toEqual(mockData.response);
  });

  it('deleteSurveyRepository', async () => {
    const mockId = 2;
    const result = await surveyRepository.delete(mockId);
    expect(result.id).toEqual(mockId);
  });

  it('deleteAllSurveyByUserRepository', async () => {
    const mockUserId = 3;
    const result = await surveyRepository.deleteAllByUserId(mockUserId);
    expect(result.count).toBeLessThan(3);
  });
});

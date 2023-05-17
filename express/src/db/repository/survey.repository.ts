import { PrismaClient } from "@prisma/client";
import { Survey } from "../db.type";
const prisma = new PrismaClient();

class SurveyRepository {
  create = async (user_id: number, category: string, response: number[]) => {
    return await prisma.survey.create({
      data: { user_id, category, response },
    });
  };

  delete = async (id: number) => {
    return await prisma.survey.delete({
      where: { id },
    });
  };

  deleteAllByUserId = async (user_id: number) => {
    return await prisma.survey.deleteMany({ where: { user_id } });
  };

  get = async (user_id: number) => {
    return await prisma.survey.findMany({
      where: { user_id },
    });
  };

  update = async (id: number, response: number[]) => {
    return await prisma.survey.update({
      where: {
        id,
      },
      data: {
        response,
      },
    });
  };
}

export default SurveyRepository;

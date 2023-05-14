import { PrismaClient } from "@prisma/client";
import { Survey } from "../db.type";
const prisma = new PrismaClient();

class SurveyRepository {
  async create(survey: Survey) {
    return await prisma.survey.create({
      data: survey,
    });
  }

  async delete(id: number) {
    return await prisma.survey.delete({
      where: { id },
    });
  }

  async getAll(user_id: number) {
    return await prisma.survey.findMany({
      where: { user_id },
    });
  }
}

export default new SurveyRepository();

import { PrismaClient } from "@prisma/client";
import { Survey } from "../db.type";
const prisma = new PrismaClient();

class SurveyRepository {
  async create(user_id: number, category: string, response: number[]) {
    return await prisma.survey.create({
      data: { user_id, category, response },
    });
  }

  async delete(id: number) {
    return await prisma.survey.delete({
      where: { id },
    });
  }

  async get(user_id: number) {
    return await prisma.survey.findMany({
      where: { user_id },
    });
  }

  async update(id: number, response: number[]) {
    return await prisma.survey.update({
      where: {
        id,
      },
      data: {
        response,
      },
    });
  }
}

export default new SurveyRepository();

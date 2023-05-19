import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Board as PrismaBoard, BoardStatus } from '@prisma/client';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsRepository {
  constructor(private prisma: PrismaService) {}

  async getAllBoards(): Promise<PrismaBoard[]> {
    return this.prisma.board.findMany();
  }

  async getBoardById(id: number): Promise<PrismaBoard> {
    return this.prisma.board.findUnique({ where: { id } });
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<PrismaBoard> {
    const { title, description } = createBoardDto;

    return this.prisma.board.create({
      data: {
        title,
        description,
        status: BoardStatus.PUBLIC,
      },
    });
  }

  async deleteBoard(id: number): Promise<void> {
    await this.prisma.board.delete({ where: { id } });
  }

  async updateBoardStatus(
    id: number,
    status: BoardStatus,
  ): Promise<PrismaBoard> {
    return this.prisma.board.update({
      where: { id },
      data: { status },
    });
  }
}

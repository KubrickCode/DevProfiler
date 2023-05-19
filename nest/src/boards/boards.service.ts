import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board as PrismaBoard, BoardStatus } from '@prisma/client';
import { BoardsRepository } from './boards.repository';

@Injectable()
export class BoardsService {
  constructor(private boardsRepository: BoardsRepository) {}

  async getAllBoards(): Promise<PrismaBoard[]> {
    return this.boardsRepository.getAllBoards();
  }

  async getBoardById(id: number): Promise<PrismaBoard> {
    const board = await this.boardsRepository.getBoardById(id);

    if (!board) {
      throw new NotFoundException('No posts found that match');
    }

    return board;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<PrismaBoard> {
    return this.boardsRepository.createBoard(createBoardDto);
  }

  async deleteBoard(id: number): Promise<void> {
    await this.boardsRepository.deleteBoard(id);
  }

  async updateBoardStatus(
    id: number,
    status: BoardStatus,
  ): Promise<PrismaBoard> {
    return this.boardsRepository.updateBoardStatus(id, status);
  }
}

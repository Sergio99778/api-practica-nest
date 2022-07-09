import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';

// DTO
import { willTheyMeetDto } from './dto';

// Service
import { LogicService } from './logic.service';

@Controller('logic')
export class LogicController {
  constructor(private readonly logicService: LogicService) {}

  @Post('/')
  willTheyMeet(@Body() body: willTheyMeetDto[]): string {
    try {
      const results = body.map(({ x1, v1, x2, v2 }) =>
        this.logicService.meet(x1, v1, x2, v2),
      );
      return results.join('\n');
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}

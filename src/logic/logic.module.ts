import { Module } from '@nestjs/common';
import { LogicController } from './logic.controller';
import { LogicService } from './logic.service';

@Module({
  controllers: [LogicController],
  providers: [LogicService]
})
export class LogicModule {}

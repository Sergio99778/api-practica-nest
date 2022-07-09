import { IsNumber } from 'class-validator';

export class willTheyMeetDto {
  @IsNumber()
  x1: number;

  @IsNumber()
  v1: number;

  @IsNumber()
  x2: number;

  @IsNumber()
  v2: number;
}

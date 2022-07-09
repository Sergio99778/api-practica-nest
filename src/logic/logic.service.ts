import { Injectable } from '@nestjs/common';

@Injectable()
export class LogicService {
  meet(x1: number, v1: number, x2: number, v2: number): string {
    // If v1 is less than v2, then they will never meet
    if (v1 < v2) {
      return 'NO';
    }
    // Given the distance between the two, then if its divisible by the difference of the velocities, then they will meet, cause no matter how far apart they are if a the given time t then t(v2-v1) = (x2-x1)
    if ((x2 - x1) % (v2 - v1) === 0) {
      return 'YES';
    }
    return 'NO';
  }
}

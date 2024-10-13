import { Ball } from './ball';
import { Hit } from '../common/const';
import { Balls } from './balls';

export class BaseballGame {
  #balls: Balls;

  constructor(values: number[]) {
    this.#balls = new Balls(values);
  }

  printScore() {
    const score = this.#balls.score;
    if (score['NOTHING'] === 3) {
      console.log('낫싱');
      return;
    }
    if (score['BALL'] > 0 && score['STRIKE'] > 0) {
      console.log(`${score['BALL']}볼 ${score['STRIKE']}스트라이크`);
      return;
    }
    if (score['BALL'] > 0) {
      console.log(`${score['BALL']}볼`);
    }
    if (score['STRIKE'] > 0) {
      console.log(`${score['STRIKE']}스트라이크`);
      return;
    }
  }

  play(userBallValues: number[]) {
    const userBalls = new Balls(userBallValues);
    this.#balls.pitchBalls(userBalls);
  }
  isEnd(): boolean {
    return this.#balls.score.STRIKE === 3;
  }
}

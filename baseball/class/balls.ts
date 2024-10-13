import { BallIdx, BallValue } from 'baseball/types';
import { Ball } from './ball';
import { Hit } from 'baseball/common/const';

export class Balls {
  #balls: Ball[];
  #score: {
    [key in keyof typeof Hit]: number;
  };

  constructor(arr: number[]) {
    if (arr.length !== 3)
      throw new Error(`The length of the balls argument must be 3.`);

    this.#balls = arr.map((value, idx) => {
      return new Ball({
        idx: idx as BallIdx,
        value: value as BallValue,
      });
    });
  }

  pitchBalls(userBalls: Balls) {
    const scoreTemp = { STRIKE: 0, BALL: 0, NOTHING: 0 };
    for (const userBall of userBalls.balls) {
      const result = this.#pitchBall(userBall);

      scoreTemp[result]++;
    }
    this.#score = scoreTemp;
  }
  #pitchBall(userBall: Ball) {
    const results = new Set<keyof typeof Hit>();
    results.add(this.balls[0].pitchBall(userBall));
    results.add(this.balls[1].pitchBall(userBall));
    results.add(this.balls[2].pitchBall(userBall));

    if (results.has('STRIKE')) return Hit.STRIKE;
    if (results.has('BALL')) return Hit.BALL;
    return Hit.NOTHING;
  }

  get balls() {
    return this.#balls;
  }

  get score() {
    return this.#score;
  }
}

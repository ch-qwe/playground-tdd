import { isValidBallIdx, isValidBallValue } from 'baseball/common/util';
import { Hit } from '../common/const';
import { BallIdx, BallValue } from 'baseball/types';

export class Ball {
  #idx: number;
  #value: number;

  constructor({ idx, value }: { idx: BallIdx; value: BallValue }) {
    if (!isValidBallIdx(idx)) throw new Error('idx must be between 0 and 2');
    if (!isValidBallValue(value))
      throw new Error('value must be between 1 and 9');
    this.#idx = idx;
    this.#value = value;
  }

  get idx() {
    return this.#idx;
  }

  get value() {
    return this.#value;
  }

  pitchBall(ball: Ball) {
    if (this.equals(ball)) return Hit.STRIKE;
    if (this.matchBallNumber(ball)) return Hit.BALL;
    return Hit.NOTHING;
  }

  matchBallNumber(ball: Ball) {
    return this.#value == ball.value;
  }

  matchBallIdx(ball: Ball) {
    return this.#idx == ball.idx;
  }
  equals(ball: Ball) {
    return this.#idx == ball.idx && this.#value == ball.value;
  }
}

import { Hit } from 'baseball/common/const';
import { Ball } from '../class/ball';

describe('Ball 객체 테스트', () => {
  it('Ball의 위치는 0~2 사이의 숫자여야 한다.', () => {
    const error = new Error('idx must be between 0 and 2');
    const ball0 = new Ball({ idx: 0, value: 1 });
    const ball2 = new Ball({ idx: 2, value: 1 });
    expect(ball0.idx).toBe(0);
    expect(ball2.idx).toBe(2);
    expect(() => new Ball({ idx: -1 as any, value: 1 })).toThrow(error);
    expect(() => new Ball({ idx: 3 as any, value: 1 })).toThrow(error);
  });

  it('Ball의 값은 1~9 사이의 숫자여야 한다.', () => {
    const error = new Error('value must be between 1 and 9');
    const ball1 = new Ball({ idx: 1, value: 1 });
    const ball9 = new Ball({ idx: 1, value: 9 });
    expect(ball1.value).toBe(1);
    expect(ball9.value).toBe(9);
    expect(() => new Ball({ idx: 1, value: 0 as any })).toThrow(error);
    expect(() => new Ball({ idx: 1, value: 10 as any })).toThrow(error);
  });

  describe('볼 점수체크 테스트', () => {
    const comBall = new Ball({ idx: 1, value: 1 });
    const strikeBall = new Ball({ idx: 1, value: 1 });
    const ballBall = new Ball({ idx: 2, value: 1 });
    const nothingBall = new Ball({ idx: 1, value: 2 });
    it('strike 위치랑 값이 같은 경우.', () => {
      expect(comBall.pitchBall(strikeBall)).toBe(Hit.STRIKE);
    });
    it('ball. 위치는 다른데 값이 같은 경우.', () => {
      expect(comBall.pitchBall(ballBall)).toBe(Hit.BALL);
    });
    it('nothing. 위치도 다르고 값도 다른 경우.', () => {
      expect(comBall.pitchBall(nothingBall)).toBe(Hit.NOTHING);
    });
  });
});

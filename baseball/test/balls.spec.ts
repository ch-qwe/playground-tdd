import { Balls } from 'baseball/class/balls';

describe('balls 객체 생성 테스트', () => {
  it('길이가 3이여야함.', () => {
    const error = new Error(`The length of the balls argument must be 3.`);
    expect(() => new Balls([1, 2])).toThrow(error);
    expect(() => new Balls([1, 2, 3, 4])).toThrow(error);
  });

  it('값은 1~9 사이여야함.', () => {
    const error = new Error('value must be between 1 and 9');
    expect(() => new Balls([1, 2, 10])).toThrow(error);
    expect(() => new Balls([1, 2, 0])).toThrow(error);
  });
});

describe('Balls 점수 테스트', () => {
  const comBalls = new Balls([1, 2, 3]);
  it('Notjing', () => {
    const userBalls = new Balls([4, 5, 6]);
    comBalls.pitchBalls(userBalls);
    const score = comBalls.score;
    expect(score['STRIKE']).toBe(0);
    expect(score['BALL']).toBe(0);
    expect(score['NOTHING']).toBe(3);
  });
  it('1Strike', () => {
    const userBalls = new Balls([1, 5, 6]);
    comBalls.pitchBalls(userBalls);
    const score = comBalls.score;
    expect(score['STRIKE']).toBe(1);
    expect(score['BALL']).toBe(0);
    expect(score['NOTHING']).toBe(2);
  });
  it('1Ball 1Strike', () => {
    const userBalls = new Balls([1, 3, 4]);
    comBalls.pitchBalls(userBalls);
    const score = comBalls.score;
    expect(score['STRIKE']).toBe(1);
    expect(score['BALL']).toBe(1);
    expect(score['NOTHING']).toBe(1);
  });
  it('2Ball 1Strike', () => {
    const userBalls = new Balls([1, 3, 2]);
    comBalls.pitchBalls(userBalls);
    const score = comBalls.score;
    expect(score['STRIKE']).toBe(1);
    expect(score['BALL']).toBe(2);
    expect(score['NOTHING']).toBe(0);
  });
  it('0Ball 2Strike', () => {
    const userBalls = new Balls([1, 2, 4]);
    comBalls.pitchBalls(userBalls);
    const score = comBalls.score;
    expect(score['STRIKE']).toBe(2);
    expect(score['BALL']).toBe(0);
    expect(score['NOTHING']).toBe(1);
  });
  it('3Strike', () => {
    const userBalls = new Balls([1, 2, 3]);
    comBalls.pitchBalls(userBalls);
    const score = comBalls.score;
    expect(score['STRIKE']).toBe(3);
    expect(score['BALL']).toBe(0);
    expect(score['NOTHING']).toBe(0);
  });
});

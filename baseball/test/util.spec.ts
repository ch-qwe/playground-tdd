import {
  isValidBallValue,
  isValidBallIdx,
  genRandomValues,
} from 'baseball/common/util';

describe('util 테스트', () => {
  it('ball value가 1~9 사이의 값인지 체크.', () => {
    expect(isValidBallValue(0)).toBe(false);
    expect(isValidBallValue(10)).toBe(false);
    expect(isValidBallValue(1)).toBe(true);
    expect(isValidBallValue(9)).toBe(true);
  });

  it('ball idx가 0~2 사이의 값인지 체크.', () => {
    expect(isValidBallIdx(0)).toBe(true);
    expect(isValidBallIdx(2)).toBe(true);
    expect(isValidBallIdx(-1)).toBe(false);
    expect(isValidBallIdx(3)).toBe(false);
  });

  it('genRandomValues 는 1~9 사이의 서로 다른 수 3개를 반환한다.', () => {
    const randomValues = genRandomValues();
    expect(randomValues.length).toBe(3);
    expect(randomValues.every((v) => isValidBallValue(v))).toBe(true);
    expect(new Set(randomValues).size).toBe(3);
  });
});

import { Ball } from '../class/ball';
import { BaseballGame } from '../class/baseballGame';
import { Hit } from '../common/const';

describe('숫자야구게임', () => {
  it('게임이 엔딩 테스트', () => {
    const comBalls = [1, 2, 3];
    const userBalls = [1, 2, 9];
    const userWinBalls = [1, 2, 3];
    const baseballGame = new BaseballGame(comBalls);

    baseballGame.play(userBalls);
    expect(baseballGame.isEnd()).toBe(false);

    baseballGame.play(userWinBalls);
    expect(baseballGame.isEnd()).toBe(true);
  });
});

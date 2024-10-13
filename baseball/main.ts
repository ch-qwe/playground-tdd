import { createInterface } from 'readline';
import { BaseballGame } from 'baseball/class/baseballGame';
import { genRandomValues } from 'baseball/common/util';
import { promisify } from 'util';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = promisify(rl.question).bind(rl);
const GAME_STATUS_FLAG = {
  CONTINUE: 'CONTINUE',
  END: 'END',
} as const;

(async () => {
  let baseballGame = new BaseballGame(genRandomValues());

  let gameStatusFlag: (typeof GAME_STATUS_FLAG)[keyof typeof GAME_STATUS_FLAG] =
    'CONTINUE';
  while (gameStatusFlag !== GAME_STATUS_FLAG.END) {
    const userInputBallValues = await question('숫자를 입력해 주세요 : ');
    const userBallValues = [...userInputBallValues]?.map(Number);

    baseballGame.play(userBallValues);
    baseballGame.printScore();

    if (!baseballGame.isEnd()) continue;

    const userRestartChoice = await question(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );
    if (userRestartChoice === '1') {
      baseballGame = new BaseballGame(genRandomValues());
      continue;
    }
    gameStatusFlag = GAME_STATUS_FLAG.END;
  }
  process.exit();
})();

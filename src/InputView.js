import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
    /**
     * @returns {Promise<Date>}
     */
    async readDate() {
        while (true) {
            try {
                const input = Number(
                    await MissionUtils.Console.readLineAsync(
                        '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n'
                    )
                );
                this.visitDateInputValidate(input);
                return new Date(`2023-12-${input < 10 ? `0${input}` : input}`);
            } catch (error) {
                MissionUtils.Console.print(error.message);
            }
        }
    },

    /**
     * @param {number} input
     */
    visitDateInputValidate(input) {
        if (!(input && input >= 1 && input <= 31)) {
            throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
        }
    },
};

export default InputView;

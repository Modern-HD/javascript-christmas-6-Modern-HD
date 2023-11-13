import { MissionUtils } from '@woowacourse/mission-utils';
import Menu from './Menu.js';
import ChristmasPromotion from './ChristmasPromotion.js';

const MENU_EXP = /^([a-zA-Z가-힣]+-\d+)(,[a-zA-Z가-힣]+-\d+)*$/;

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
     * @returns {Promise<string[]>}
     */
    async readMenu() {
        while (true) {
            try {
                const input = await MissionUtils.Console.readLineAsync(
                    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n'
                ).then(str => str.trim());
                this.orderInputValidate(input);
                const menus = this.getMenuStrArr(input);
                ChristmasPromotion.orderCommonValidate(menus);
                return menus;
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

    /**
     * @param {string} input
     */
    orderInputValidate(input) {
        if (!MENU_EXP.test(input)) {
            throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        }
        const splitted = this.menuInputSplit(input);
        if (!splitted.every(([_, amount]) => amount && amount > 0)) {
            throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        }
        if (!splitted.every(([menu]) => Menu.has(menu))) {
            throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        }
        if (new Set(splitted.map(([menu]) => menu)).size !== splitted.length) {
            throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
        }
    },

    /**
     * @param {string} input
     * @returns {[string, number][]}
     */
    menuInputSplit(input) {
        return input
            .split(',')
            .map(str => str.split('-'))
            .map(([menu, amount]) => [menu, Number(amount)]);
    },

    /**
     * @param {string} input
     * @returns {string[]}
     */
    getMenuStrArr(input) {
        const MenuStrArr = [];
        this.menuInputSplit(input).forEach(([menu, amount]) => {
            const strArr = [...Array(amount)].fill(menu);
            MenuStrArr.push(...strArr);
        });
        return MenuStrArr;
    },
};

export default InputView;

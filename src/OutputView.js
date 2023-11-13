import { MissionUtils } from '@woowacourse/mission-utils';

const OutputView = {
    printWelcomeMsg() {
        MissionUtils.Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
    },

    /**
     * @param {string[]} menus
     */
    printMenu(menus) {
        MissionUtils.Console.print('<주문 메뉴>');
        menus.reduce((acc, cur, i, arr) => {
            if (cur === arr[i + 1]) return acc + 1;
            MissionUtils.Console.print(`${cur} ${acc}개`);
            return 1;
        }, 1);
        MissionUtils.Console.print('');
    },

    /**
     * @param {number} totalOriginPrice
     */
    printTotalPriceBeforeSale(totalOriginPrice) {
        MissionUtils.Console.print('<할인 전 총주문 금액>');
        MissionUtils.Console.print(`${this.currencyFormat(totalOriginPrice)}원`);
        MissionUtils.Console.print('');
    },
};

export default OutputView;

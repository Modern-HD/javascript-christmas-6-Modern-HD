import { MissionUtils } from '@woowacourse/mission-utils';
import ChristmasPromotion from './ChristmasPromotion.js';
import Menu from './Menu.js';

const OutputView = {
    printWelcomeMsg() {
        MissionUtils.Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
    },

    /**
     * @param {Date} visitDate
     * @param {string[]} menus
     * @param {number} totalOriginPrice
     * @param {number} totalBenefitPrice
     * @param {[number, number, number, number, boolean]} sales
     */
    printResult(visitDate, menus, totalOriginPrice, totalBenefitPrice, sales) {
        MissionUtils.Console.print(
            `${visitDate.getMonth() + 1}월 ${visitDate.getDate()}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
        );
        MissionUtils.Console.print('');
        this.printMenu(menus);
        this.printTotalPriceBeforeSale(totalOriginPrice);
        this.printGift(sales[4]);
        this.printBenefits(sales);
        this.printBenefitPrice(totalOriginPrice, totalBenefitPrice, sales[4]);
        this.printBadge(totalBenefitPrice);
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

    /**
     * @param {boolean} isGift
     */
    printGift(isGift) {
        MissionUtils.Console.print('<증정 메뉴>');
        MissionUtils.Console.print(isGift ? `${ChristmasPromotion.getGiftTarget()} 1개` : '없음');
        MissionUtils.Console.print('');
    },

    /**
     * @param {[number, number, number, number, boolean]}
     */
    printBenefits([christmasDDaySale, weekdaySale, weekendSale, specialDaySale, isGift]) {
        MissionUtils.Console.print('<혜택 내역>');
        if (christmasDDaySale)
            MissionUtils.Console.print(`크리스마스 디데이 할인: -${this.currencyFormat(christmasDDaySale)}원`);
        if (weekdaySale) MissionUtils.Console.print(`평일 할인: -${this.currencyFormat(weekdaySale)}원`);
        if (weekendSale) MissionUtils.Console.print(`주말 할인: -${this.currencyFormat(weekendSale)}원`);
        if (specialDaySale) MissionUtils.Console.print(`특별 할인: -${this.currencyFormat(specialDaySale)}원`);
        if (isGift)
            MissionUtils.Console.print(
                `증정 이벤트: -${this.currencyFormat(Menu.get(ChristmasPromotion.getGiftTarget()).price)}원`
            );
        if (!(christmasDDaySale || weekdaySale || weekendSale || specialDaySale || isGift))
            MissionUtils.Console.print('없음');
        MissionUtils.Console.print('');
    },

    /**
     * @param {number} totalOriginPrice
     * @param {number} totalBenefitPrice
     * @param {boolean} isGift
     */
    printBenefitPrice(totalOriginPrice, totalBenefitPrice, isGift) {
        MissionUtils.Console.print('<총혜택 금액>');
        MissionUtils.Console.print(`${this.currencyFormat(totalBenefitPrice * -1)}원`);
        MissionUtils.Console.print('');
        MissionUtils.Console.print('<할인 후 예상 결제 금액>');
        if (isGift) totalBenefitPrice -= Menu.get(ChristmasPromotion.getGiftTarget()).price;
        MissionUtils.Console.print(`${this.currencyFormat(totalOriginPrice - totalBenefitPrice)}원`);
        MissionUtils.Console.print('');
    },

    /**
     * @param {number} totalBenefitPrice
     */
    printBadge(totalBenefitPrice) {
        MissionUtils.Console.print('<12월 이벤트 배지>');
        MissionUtils.Console.print(ChristmasPromotion.badgeEvent(totalBenefitPrice) || '없음');
    },

    /**
     * @param {number} amount
     * @returns {string}
     */
    currencyFormat(amount) {
        return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    },
};

export default OutputView;

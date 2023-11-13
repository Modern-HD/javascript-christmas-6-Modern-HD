import Menu from './Menu.js';

const GIFT_TARGET = '샴페인';

const ChristmasPromotion = {
    /**
     * @param {Date} visitDate
     * @returns {number}
     */
    christmasDDaySale(visitDate) {
        const start = new Date('2023-12-01');
        const end = new Date('2023-12-26');
        if (!(visitDate >= start && visitDate < end)) return 0;
        return (visitDate.getDate() - 1) * 100 + 1000;
    },

    /**
     * @param {Date} visitDate
     * @param {string[]} menus
     * @returns {number}
     */
    weekdaySale(visitDate, menus) {
        if (!(visitDate.getDay() >= 0 && visitDate.getDay() <= 4)) return 0;
        return menus.filter(menu => Menu.get(menu).type === '디저트').length * 2023;
    },

    /**
     * @param {Date} visitDate
     * @param {string[]} menus
     * @returns {number}
     */
    weekendSale(visitDate, menus) {
        if (!(visitDate.getDay() >= 5 && visitDate.getDay() <= 6)) return 0;
        return menus.filter(menu => Menu.get(menu).type === '메인').length * 2023;
    },

    /**
     * @param {Date} visitDate
     * @returns {number}
     */
    specialDaySale(visitDate) {
        const specialDate = new Set([3, 10, 17, 24, 25, 31]);
        if (specialDate.has(visitDate.getDate())) return 1000;
        return 0;
    },

    /**
     * @param {number} totalOriginPrice
     * @returns {boolean}
     */
    giftEvent(totalOriginPrice) {
        return totalOriginPrice >= 120_000;
    },

    /**
     * @param {number} totalBenefitPrice
     * @returns {string | false}
     */
    badgeEvent(totalBenefitPrice) {
        if (totalBenefitPrice >= 20000) return '산타';
        if (totalBenefitPrice >= 10000) return '트리';
        if (totalBenefitPrice >= 5000) return '별';
        return false;
    },

    /**
     * @param {string[]} menus
     */
    orderCommonValidate(menus) {
        if (menus.filter(menu => Menu.get(menu).type === '음료').length === menus.length) {
            throw new Error('[ERROR] 음료만 주문 할 수 없습니다.');
        }
        if (menus.length > 20) {
            throw new Error('[ERROR] 메뉴를 20개를 초과하여 주문할 수 없습니다.');
        }
    },

    /**
     * @param {Date} visitDate
     * @param {number} totalOriginPrice
     * @returns {boolean}
     */
    eventCommonValidate(visitDate, totalOriginPrice) {
        if (!(visitDate >= new Date('2023-12-01') && visitDate < new Date('2024-01-01'))) return false;
        if (totalOriginPrice < 10000) return false;
        return true;
    },

    /**
     * @param {Date} visitDate
     * @param {string[]} menus
     * @param {number} totalOriginPrice
     * @returns {[number, number, number, number, boolean]}
     */
    getSales(visitDate, menus, totalOriginPrice) {
        if (!this.eventCommonValidate(visitDate, totalOriginPrice)) return [0, 0, 0, 0, false];
        return [
            this.christmasDDaySale(visitDate),
            this.weekdaySale(visitDate, menus),
            this.weekendSale(visitDate, menus),
            this.specialDaySale(visitDate),
            this.giftEvent(totalOriginPrice),
        ];
    },

    getGiftTarget() {
        return GIFT_TARGET;
    },
};

export default ChristmasPromotion;

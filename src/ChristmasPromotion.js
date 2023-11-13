import Menu from './Menu.js';

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
};

export default ChristmasPromotion;

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
};

export default ChristmasPromotion;

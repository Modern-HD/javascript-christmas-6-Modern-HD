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
};

export default ChristmasPromotion;

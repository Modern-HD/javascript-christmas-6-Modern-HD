import ChristmasPromotion from './ChristmasPromotion.js';
import Menu from './Menu.js';

const Calculator = {
    /**
     * @param {string[]} menus
     * @returns {number}
     */
    getTotalOriginPrice(menus) {
        return menus.reduce((acc, cur) => acc + Menu.get(cur).price, 0);
    },

    /**
     * @param {[number, number, number, number, boolean]} sales
     * @returns {number}
     */
    getTotalBenefitPrice(sales) {
        sales[4] = sales[4] ? Menu.get(ChristmasPromotion.getGiftTarget()).price : 0;
        return sales.reduce((acc, cur) => acc + cur, 0);
    },
};

export default Calculator;

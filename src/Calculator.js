import Menu from './Menu.js';

const Calculator = {
    /**
     * @param {string[]} menus
     * @returns {number}
     */
    getTotalOriginPrice(menus) {
        return menus.reduce((acc, cur) => acc + Menu.get(cur).price, 0);
    },
};

export default Calculator;

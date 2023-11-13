/**
 * @typedef {{ type: '애피타이저' | '메인' | '디저트' | '음료', price: number }} Menu
 */

/** @type {Map<string, Menu>} */
const Menu = new Map([
    ['양송이수프', { type: '애피타이저', price: 6000 }],
    ['타파스', { type: '애피타이저', price: 5500 }],
    ['시저샐러드', { type: '애피타이저', price: 8000 }],
    ['티본스테이크', { type: '메인', price: 55000 }],
    ['바비큐립', { type: '메인', price: 54000 }],
    ['해산물파스타', { type: '메인', price: 35000 }],
    ['크리스마스파스타', { type: '메인', price: 25000 }],
    ['초코케이크', { type: '디저트', price: 15000 }],
    ['아이스크림', { type: '디저트', price: 5000 }],
    ['제로콜라', { type: '음료', price: 3000 }],
    ['레드와인', { type: '음료', price: 60000 }],
    ['샴페인', { type: '음료', price: 25000 }],
]);

export default Menu;

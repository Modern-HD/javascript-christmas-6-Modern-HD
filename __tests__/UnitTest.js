import Menu from '../src/Menu';

/**
 * @typedef {{ type: string, price: number }} Menu
 */

describe('단위 테스트', () => {
    test('메뉴 이름을 키로, 메뉴 종류와 가격을 값으로, Map 형태로 저장한다.', () => {
        const inputs = [
            '양송이수프',
            '타파스',
            '시저샐러드',
            '티본스테이크',
            '바비큐립',
            '해산물파스타',
            '크리스마스파스타',
            '초코케이크',
            '아이스크림',
            '제로콜라',
            '레드와인',
            '샴페인',
        ];

        /** @type {Menu[]} */
        const expectResult = [
            { type: '애피타이저', price: 6000 },
            { type: '애피타이저', price: 5500 },
            { type: '애피타이저', price: 8000 },
            { type: '메인', price: 55000 },
            { type: '메인', price: 54000 },
            { type: '메인', price: 35000 },
            { type: '메인', price: 25000 },
            { type: '디저트', price: 15000 },
            { type: '디저트', price: 5000 },
            { type: '음료', price: 3000 },
            { type: '음료', price: 60000 },
            { type: '음료', price: 25000 },
        ];

        inputs.forEach((input, i) => {
            expect(Menu.get(input)).toEqual(expectResult[i]);
        });
    });
});
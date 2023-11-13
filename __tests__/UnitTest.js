import Menu from '../src/Menu';
import Calculator from '../src/Calculator';
import ChristmasPromotion from '../src/ChristmasPromotion';

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

    test('주문한 메뉴의 총 가격을 구하는 기능', () => {
        /** @type {string[]} */
        const input = ['양송이수프', '티본스테이크', '초코케이크', '아이스크림', '샴페인'];

        expect(Calculator.getTotalOriginPrice(input)).toEqual(106000);
    });

    test('총혜택 금액을 계산하는 기능', () => {
        const inputs = [
            [0, 0, 0, 0, false],
            [2300, 0, 2023, 0, false],
            [1200, 4046, 0, 1000, true],
        ];

        const expectResult = [0, 4323, 31246];

        inputs.forEach((input, i) => {
            expect(Calculator.getTotalBenefitPrice(input)).toEqual(expectResult[i]);
        });
    });

    test('1000원부터 시작하여 크리스마스가 다가올수록 날마다 100원의 추가 금액을 계산하여 할인 금액을 반한하는 크리스마스 디데이 할인 기능', () => {
        const inputs = [
            new Date('2023-12-01'),
            new Date('2023-12-10'),
            new Date('2023-12-24'),
            new Date('2023-12-25'),
            new Date('2023-12-26'),
        ];

        const expectResult = [1000, 1900, 3300, 3400, 0];

        inputs.forEach((input, i) => {
            expect(ChristmasPromotion.christmasDDaySale(input)).toEqual(expectResult[i]);
        });
    });

    test('평일이면 디저트 메뉴 1개당 2,023원씩 계산하여 할인 금액을 반환하는 평일 할인 기능', () => {
        const inputs = [
            [new Date('2023-12-01'), ['초코케이크', '초코케이크', '아이스크림']],
            [new Date('2023-12-03'), ['타파스', '시저샐러드', '초코케이크', '아이스크림', '제로콜라']],
            [new Date('2023-12-05'), ['양송이수프', '바비큐립', '아이스크림', '아이스크림', '아이스크림', '샴페인']],
            [new Date('2023-12-07'), ['초코케이크', '제로콜라']],
            [new Date('2023-12-09'), ['초코케이크', '아이스크림', '제로콜라']],
        ];

        const expectResult = [0, 4046, 6069, 2023, 0];

        inputs.forEach(([visitDate, menus], i) => {
            expect(ChristmasPromotion.weekdaySale(visitDate, menus)).toEqual(expectResult[i]);
        });
    });

    test('주말이면 메인 메뉴를 1개당 2,023원씩 계산하여 할인 금액을 반환하는 주말 할인 기능', () => {
        const inputs = [
            [new Date('2023-12-01'), ['티본스테이크', '해산물파스타', '아이스크림', '레드와인']],
            [new Date('2023-12-02'), ['타파스', '시저샐러드', '아이스크림', '제로콜라']],
            [new Date('2023-12-02'), ['양송이수프', '티본스테이크', '제로콜라']],
            [new Date('2023-12-03'), ['티본스테이크', '아이스크림', '레드와인']],
            [new Date('2023-12-29'), ['바비큐립', '바비큐립', '바비큐립']],
        ];

        const expectResult = [4046, 0, 2023, 0, 6069];

        inputs.forEach(([visitDate, menus], i) => {
            expect(ChristmasPromotion.weekendSale(visitDate, menus)).toEqual(expectResult[i]);
        });
    });

    test('12월 3, 10, 17, 24, 25, 31일이면 1000원의 할인 금액을 반환하는 특별 할인 기능', () => {
        const inputs = [
            new Date('2023-12-03'),
            new Date('2023-12-10'),
            new Date('2023-12-16'),
            new Date('2023-12-17'),
            new Date('2023-12-20'),
            new Date('2023-12-24'),
            new Date('2023-12-25'),
            new Date('2023-12-26'),
            new Date('2023-12-30'),
            new Date('2023-12-31'),
        ];

        const expectResult = [1000, 1000, 0, 1000, 0, 1000, 1000, 0, 0, 1000];

        inputs.forEach((input, i) => {
            expect(ChristmasPromotion.specialDaySale(input)).toEqual(expectResult[i]);
        });
    });

    test('할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 증정 여부를 반한하는 증정 이벤트 기능', () => {
        const inputs = [0, 5000, 11999, 12000, 110000, 119999, 120000, 120001, 360000];

        const expectResult = [false, false, false, false, false, false, true, true, true];

        inputs.forEach((input, i) => {
            expect(ChristmasPromotion.giftEvent(input)).toEqual(expectResult[i]);
        });
    });

    test('총혜택 금액에 따라 이벤트 배지를 반환하는 기능', () => {
        const inputs = [0, 4999, 5000, 9999, 10000, 19999, 20000, 50000];

        const expectResult = [false, false, '별', '별', '트리', '트리', '산타', '산타'];

        inputs.forEach((input, i) => {
            expect(ChristmasPromotion.badgeEvent(input)).toEqual(expectResult[i]);
        });
    });
});

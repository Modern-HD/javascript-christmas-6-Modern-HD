import Calculator from './Calculator.js';
import ChristmasPromotion from './ChristmasPromotion.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
    async run() {
        OutputView.printWelcomeMsg();
        const visitDate = await InputView.readDate();
        const menus = await InputView.readMenu();
        const totalOriginPrice = Calculator.getTotalOriginPrice(menus);
        const sales = ChristmasPromotion.getSales(visitDate, menus, totalOriginPrice);
        const totalBenefitPrice = Calculator.getTotalBenefitPrice(sales);
        OutputView.printResult(visitDate, menus, totalOriginPrice, totalBenefitPrice, sales);
    }
}

export default App;

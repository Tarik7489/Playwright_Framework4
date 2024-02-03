export default class MoneyPage {
    constructor(page) {
      this.page = page;
    }
  
    getMoneyTab = () => this.page.locator('button[aria-label="Money"]');
    getTokenArrow = () => this.page.locator('(//button[@data-testid="stepTwoBackButton"])[6]');
  }
  
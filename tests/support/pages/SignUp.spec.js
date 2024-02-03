export default class SignUpPage {
    constructor(page) {
        this.page = page;
    }

    getSignUpLink = () => this.page.locator('span[data-testid="signUp"]')
    getEmailField = () => this.page.locator('input[name="email"]')
    getFirstNameField = () => this.page.locator('input[name="firstName"]')
    getLastNameField = () => this.page.locator('input[name="lastName"]')
    getNumberField = () => this.page.locator('input[data-testid="testPhoneInput"]')
    getReferralCodeField = () => this.page.locator('input[name="referralCode"]')
    getSignupBtn = () => this.page.locator('button[data-testid="submitBtn"]')
    getOtpSubmitBtn = () => this.page.locator('button[data-testid="submitOtp"]')
    getSubmitQuestionBtn = () => this.page.locator("(//span[@class='sc-pyfCe btlWur'])[1]")
    getContinueToNoumenaBtn = () => this.page.locator('//span[contains(text(), "Continue to Noumena")]')

    //Question fields
    get1stQuestionField = () => this.page.locator("(//input[@placeholder='Select Answer'])[1]")
    get2ndQuestionField = () => this.page.locator("(//input[@placeholder='Select Answer'])[2]")
    get3rdQuestionField = () => this.page.locator("(//input[@placeholder='Select Answer'])[3]")
    get4thQuestionField = () => this.page.locator("(//input[@placeholder='Select Answer'])[4]")
    get5thQuestionField = () => this.page.locator("(//input[@placeholder='Select Answer'])[5]")
    get6thQuestionField = () => this.page.locator("(//input[@placeholder='Select Answer'])[6]")
    getSearchField = () => this.page.locator('input[placeholder="Search for a business..."]')

    //question answers
    get1stQuestionAns = () => this.page.getByText('Gen Z (18-24)')
    get2ndQuestionAns = () => this.page.locator('//div[contains(text(), "6-9 years")]')
    get3rdQuestionAns = () => this.page.getByText('Grower')
    // get4thQuestionAns=()=>this.page.getByText('Gen Z (18-24)')
    get5stQuestionAns = () => this.page.getByText('$300,000+')
    get6stQuestionAns = () => this.page.getByText('Sole Proprietor')

    getSearchAns = () => this.page.locator('//div[contains(text(), "Accounting")]')


    async autoActiveSignUpFlow() {


        await this.get1stQuestionField().click()
        await this.get1stQuestionAns().click()

        await this.get2ndQuestionField().click()
        await this.get2ndQuestionAns().click()

        await this.get3rdQuestionField().click()
        await this.get3rdQuestionAns().click()

        await this.get5thQuestionField().click()
        await this.get5stQuestionAns().click()

        await this.get6thQuestionField().click()
        await this.get6stQuestionAns().click()

        await this.getSearchField().click()
        await this.getSearchAns().click()

        await this.getSubmitQuestionBtn().click()

        // await this.getContinueToNoumenaBtn().click()

    }

}
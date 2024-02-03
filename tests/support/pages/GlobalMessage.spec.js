export default class MessagePage {

    constructor(page, data) {
        this.page = page;
        this.data = data;

    }

    getGlobalMsgIcon = () => this.page.locator('button[aria-label="Messages"]')
    getPlusIcon = () => this.page.locator('div[data-test="SideBar-Options"]')
    getInputSearchField = () => this.page.locator('input[data-test="MessageUserSearch-InputField"]')
    getUser = () => this.page.locator('//div[contains(text(),"Monster King")]')
    getMessageField = () => this.page.locator('textarea[data-testid="TextArea"]')
    getMsgSendBtn = () => this.page.locator('div[data-test="MessageInput-SendButtonWrapper"]')
    getAllTabs=()=>this.page.locator('input[name="all"]')
    getDirectTab=()=>this.page.locator('input[name="direct_conversation"]')
    getNoumsTab=()=>this.page.locator('input[name="noums"]')



    async msgUserBySearchingEmail() {
        const { searchUser, message } = this.data;

        await this.getGlobalMsgIcon().click()
        await this.getPlusIcon().click()
        await this.getInputSearchField().fill(searchUser)
        await this.getUser().click()
        await this.getMessageField().fill(message)
        await this.getMsgSendBtn().click()
    }
}


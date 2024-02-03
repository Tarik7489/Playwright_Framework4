export default class EventPage{
    constructor(page){
        this.page=page;
    }
    getPlusIcon=()=>this.page.locator('//button[@aria-label="Create"]')
    getInstantEvent=()=>this.page.locator('//div[contains(text(),"Start Event Now")]')
    getStartEventBtn=()=>this.page.locator('//span[contains(text(),"Start Event")]')
    getMicOnIcon=()=>this.page.locator('div[data-title="Mic On"]')
    getMicOffIcon=()=>this.page.locator('div[data-title="Mic Off"]')
    getRiseHand=()=>this.page.locator('div[data-title="Raise Hand"]')
    getChatBtn=()=>this.page.locator('div[data-title="Chat"]')
    getChatField=()=>this.page.locator('textarea[data-testid="TextArea"]')
    getSendMsgIcon=()=>this.page.locator('div[data-test="MessageInput-SendButtonWrapper"]')
    getClsIconForMsgWindow=()=>this.page.locator('div[data-test="SocialHallChat-CloseButton"]')
    getMemberTab=()=>this.page.locator('div[data-title="Members"]')
    getGalleryView=()=>this.page.locator('(//button[@data-testid="button"])[7]')
    getEndEventBtn=()=>this.page.locator('//span[contains(text(),"End the Event")]')
    getConfirmEndEvtBtn=()=>this.page.locator('button[data-testid="confirm-button"]')




    async instantEventWithoutAttendee(){
        await this.getPlusIcon().click()
        await this.getInstantEvent().click()
        await this.getStartEventBtn().click()
        await this.getMicOnIcon().click()
        await this.getEndEventBtn().click()
        await this.getConfirmEndEvtBtn().click()
    }
    async getStarEventScreen(){
        await this.getPlusIcon().click()
        await this.getInstantEvent().click()
        await this.getStartEventBtn().click()
    }
}
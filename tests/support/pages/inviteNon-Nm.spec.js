export default class InviteNonNm{


    constructor(page,data){
        this.page=page;
        this.data=data;
    }


    getInviteVisibilityBtn=()=>this.page.locator('//span[text()="Invites & Visibility"]');
    getNonNmTab=()=>this.page.locator('//div[text()="Non-Noumena Members"]');
    getEmailField=()=>this.page.locator('input[name="email"]');
    getFirstNameField=()=>this.page.locator('input[name="firstName"]');
    getLastNameField=()=>this.page.locator('input[name="lastName"]');
    getInviteBtn=()=>this.page.locator('button[type="submit"]');

    getNoumTab=()=>this.page.locator('button[aria-label="Noums"]');
    getGeneralNoums=()=>this.page.locator('//div[text()="General"]');
    getNoumEditBtn=()=>this.page.locator('//span[text()="Edit"]')



    async inviteNonNmWithNewUser(){

        const{nonEmail, nonFirstName, nonLastName}=this.data;
        await this.getInviteVisibilityBtn().click()
        await this.getNonNmTab().click()
        await this.getEmailField().fill(nonEmail)
        await this.getFirstNameField().fill(nonFirstName)
        await this.getLastNameField().fill(nonLastName)
        await this.getInviteBtn().click()

    }


}
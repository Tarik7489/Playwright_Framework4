// import data from 'tests/fixture/data.json'

export default class LoginPage{

constructor(page, data){
    this.page=page
    this.data=data
}

getEmailFiled = () => this.page.locator('input[data-test="EmailLoginForm-TextField"]');
getEmailLoginBtn = () => this.page.locator('button[id="email-login-btn"]');
getFirstOtpField = () => this.page.locator('input[data-testid="OtpInputTestId-0"]');
get2ndOtpField = () => this.page.locator('input[data-testid="OtpInputTestId-1"]');
get3rdOtpField = () => this.page.locator('input[data-testid="OtpInputTestId-2"]');
get4thOtpField = () => this.page.locator('input[data-testid="OtpInputTestId-3"]');
getNextBtn = () => this.page.locator('button[data-testid="otp-submit-button"]');



async autoLogin(email, otp1, otp2, otp3, otp4) {
    await this.getEmailFiled().fill(email);
    await this.getEmailLoginBtn().click();
    await this.getFirstOtpField().fill(otp1);
    await this.get2ndOtpField().fill(otp2);
    await this.get3rdOtpField().fill(otp3);
    await this.get4thOtpField().fill(otp4);
    await this.getNextBtn().click();
}
async otpFileds(otp1,otp2,otp3,otp4){
    await this.getFirstOtpField().fill(otp1)
    await this.get2ndOtpField().fill(otp2)
    await this.get3rdOtpField().fill(otp3)
    await this.get4thOtpField().fill(otp4)
}


//fetching data from fixture directly
 async reUsedLogin(){
    const{email, otp1, otp2, otp3, otp4} =this.data;
    await this.getEmailFiled().fill(email);
    await this.getEmailLoginBtn().click();
    await this.getFirstOtpField().fill(otp1);
    await this.get2ndOtpField().fill(otp2);
    await this.get3rdOtpField().fill(otp3);
    await this.get4thOtpField().fill(otp4);
    await this.getNextBtn().click();
 }
}
export default class EditProfilePage{

    constructor(page){
        this.page=page;
      
    }

    getProfileDropDown=()=>this.page.locator('(//button[@data-testid="button"])[5]')
    getMyProfileLink=()=>this.page.locator('//div[contains(text(),"My Profile")]')
    getEditBtn=()=>this.page.locator('(//span[contains(text(),"Edit")])[1]')
    getEditInfoBtn=()=>this.page.locator('(//span[contains(text(),"Edit Information")])[1]')
    getFirstNameField=()=>this.page.locator('input[name="firstName"]')
    getLastNameField=()=>this.page.locator('input[name="lastName"]')
    getTitleField=()=>this.page.locator('input[name="title"]')
    getAboutFiled=()=>this.page.locator('(//textarea[@data-testid="TextArea"])[2]')
    getCityField=()=>this.page.locator('input[name="location"]')
    getRemovePhotoBtn=()=>this.page.locator('//span[contains(text(),"Remove photo")]')
    getSaveBtn=()=>this.page.locator('button[type="submit"]')


   async navigateToEditDetailsScreen(){

    await this.getProfileDropDown().click()
    await this.getMyProfileLink().click()
    await this.getEditBtn().click()
    await this.getEditInfoBtn().click()
    }
}
export default class ProjectNoum{
    constructor(page){
        this.page=page;
    }

    getPlucicon =()=>this.page.locator('button[aria-label="Create"]')
    getNoumBtn=()=>this.page.locator('(//div[contains(text(),"Noum")])[2]')
    getUploadFile=()=>this.page.locator('input[data-testid="file-upload-input"]')
    getNameField=()=>this.page.locator('//input[@name="name"]')
    getCreateNoumBtn=()=>this.page.locator('button[data-testid="Create-Noum-Button"]')
}
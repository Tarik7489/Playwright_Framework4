export default class ProjectPost{

    constructor(page){
        this.page=page;
    }

    getNoumTab=()=>this.page.locator('button[aria-label="Noums"]');
    getGeneralNoums=()=>this.page.locator('//div[text()="General"]');
    getWhatYourMind = () => this.page.locator('//span[text()="What\'s on your mind?"]');
    getEditorField=()=>this.page.locator('div[aria-describedby="placeholder-editor"]');
    getPostBtn=()=>this.page.locator('button[data-testid="post_create_btn"]');
    getPostToastMessage=()=>this.page.locator('New Post Published');
    getNoumEditBtn=()=>this.page.locator('//span[text()="Edit"]')

    async getNoumPage(){

        await this.getNoumTab().click()
        await this.getGeneralNoums().click()
        await this.getWhatYourMind().click()
    }

  async  getNoumEditScreen(){

    await this.getNoumTab().click()
    await this.getGeneralNoums().click()
    await this.getNoumEditBtn().click()

    }

}
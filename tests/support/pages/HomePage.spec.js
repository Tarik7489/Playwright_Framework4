export default class HomePage{

constructor(page){
    this.page=page;
}

getHelloHeaderText =()=>this.page.locator('//span[contains(text(), "Hello 👋")]')
getYourWorkYourWayHeaderText = ()=>this.page.locator('//span[contains(text(), "Your Workspace Your Way")]')



}
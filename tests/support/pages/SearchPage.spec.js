export default class SearchPage{

    constructor(page){
        this.page=page;
    }

    getSearchField=()=>this.page.locator('input[placeholder="Search for Anything..."]')
    getSeeAllResultsLink=()=>this.page.locator('//span[contains(text(),"See All Results")]')
    getAllTab=()=>this.page.locator('//div[contains(text(),"All")]')
    getNoumsTab=()=>this.page.locator('input[data-testid="tab-ProjectNoum"]')
    getMembersTab=()=>this.page.locator('//div[contains(text(),"Members")]')
    getEventsTab=()=>this.page.locator('(//div[contains(text(),"Events")])[2]')
    getPostTab=()=>this.page.locator('input[data-testid="tab-Post"]')
    getCrossIcon=()=>this.page.locator('div[data-test="TextField-RightIcon"]')
    getMemberResult=()=>this.page.locator("(//span[@class='sc-iBYQkv sc-ZGJVz wfSGk jteJdG'])[1]")
    
}
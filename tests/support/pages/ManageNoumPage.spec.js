export default class ManageNoum{
    constructor(page){
        this.page=page;
    }
    getNoumTab=()=>this.page.locator('button[aria-label="Noums"]')
    getMyNoumTab=()=>this.page.locator('//div[contains(text(),"My Noums")]')
    getConnectedTab=()=>this.page.locator('//div[contains(text(),"Connected")]')
    getFollowingTab=()=>this.page.locator('//div[contains(text(),"Following")]')
    getArchieveTab=()=>this.page.locator('//div[contains(text(),"Archived")]')
    getLinkedTab=()=>this.page.locator('//div[contains(text(),"Linked")]')
    getRecentlyVisitedTab=()=>this.page.locator('//span[contains(text(),"Recently Visited")]')
    getAllTypesTab=()=>this.page.locator('//span[contains(text(),"All Types")]')
}
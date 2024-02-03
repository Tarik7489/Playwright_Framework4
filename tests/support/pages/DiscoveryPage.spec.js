export default class DiscoveryPage{

        constructor(page){
            this.page=page
        }

        getDiscoveryTab =()=>this.page.locator('button[aria-label="Discover"]')
        // getNewNoumHeader=()=>this.page.locator('//span[contains(text(),"New Noums for You")]')
}
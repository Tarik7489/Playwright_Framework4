export default class CommunityPost {
    constructor(page) {
        this.page = page;
    }

    getCommunityTab = () => this.page.locator("(//*[name()='svg'][@title='community'])[1]")
    getStartDiscussion = () => this.page.locator('div[data-test="Community-StartDiscussion"]')
    getWhatYourMindField = () => this.page.locator('div[aria-describedby="placeholder-editor"]')
    getUploadImage = () => this.page.locator('input[data-testid="file-upload-input"]')
    getCreatePostBtn = () => this.page.locator('(//span[contains(text(),"Post")])[2]')
    getAllPostTab=()=>this.page.locator('//div[contains(text(),"All posts")]')
    getNoumenaAnnouncementTab=()=>this.page.locator('//div[contains(text(),"Noumena Announcements")]')
    get1stPostThreeDots=()=>this.page.locator('(//div[@data-test="DropdownPicker"])[1]')
    getReportOption=()=>this.page.locator('//div[contains(text(),"Report")]')
    get1stRadioBtn=()=>this.page.locator('(//span[@data-testid="radio_box"])[1]')
    getSubmitReportBtn=()=>this.page.locator('button[data-testid="report_submit_btn"]')
    get1stLike=()=>this.page.locator('(//span[contains(text(),"Like")])[1]')
    getUnlike=()=>this.page.locator('(//span[contains(text(),"Liked")])[1]')
    get1stCommentBtn=()=>this.page.locator('(//div[@data-test="PostItemFooter-ButtonWrap"])[2]')
    getCommnentField=()=>this.page.locator('textarea[placeholder="Write a comment..."]')
    getCommentSendBtn=()=>this.page.locator('button[data-testid="comment-item-add-send"]')



    async getCreatPostFiled() {
        await this.getCommunityTab().click()
        await this.getStartDiscussion().click()
        // await this.page.waitForTimeout(5000);
        // await this.getWhatYourMindField().fill(post)
        // await this.getCreatePostBtn().click()
        
    }
}
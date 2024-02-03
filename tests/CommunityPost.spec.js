import { test, expect, Page, waitForSelector} from '@playwright/test'
import dotenv from 'dotenv'
import data from './fixture/data.json'
import message from './fixture/message.json'
import CommunityPost from './support/pages/CommunityPage.spec'
import LoginPage from './support/pages/LoginPage.spec'


dotenv.config({
    path: './tests/.env'
})

let page;
let login;
let post;


test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    login = new LoginPage(page, data)
    post = new CommunityPost(page)

    await page.goto(process.env.QA)
    await login.reUsedLogin()
})

test.only('Create a post with only text', async () => {
    await post.getCreatPostFiled()
    // await getByRole('combobox').locator('div').nth(2).fill("hello")
    await page.locator('//div[contains(text(),"What\'s on your mind?")]').fill(data.addComment)
    await page.locator('(//span[contains(text(),"Post")])[2]').click()
    await expect(page.getByText(message.createPostToastMessage)).toBeVisible()
})

test('Verify the All post tab and Noumena Announcement tab', async () => {
    await post.getCommunityTab().click()
    await expect(await post.getAllPostTab()).toBeVisible()
    await post.getNoumenaAnnouncementTab().click()
    await expect(await post.getNoumenaAnnouncementTab()).toBeVisible()
})

test('Verify user should be able to report the post', async () => {
    await post.getCommunityTab().click()
    await page.waitForSelector('(//div[@data-test="DropdownPicker"])[1]')
    await post.get1stPostThreeDots().click()
    await post.getReportOption().click()
    await post.get1stRadioBtn().click()
    await post.getSubmitReportBtn().click()
    await expect(page.getByText(message.reportPostToastMessage)).toBeVisible()
})
test('Verify user should be able to like and unlike the post', async () => {
    await post.getCommunityTab().click()
    await expect(await post.get1stLike()).toBeVisible({ timeout: 10000 })
    await post.get1stLike().click()
    await expect(await post.getUnlike()).toBeVisible()
    await post.getUnlike().click()
    await expect(await post.get1stLike()).toBeVisible()
})
test('Verify user should be able to comment on post', async () => {
    await post.getCommunityTab().click()
    await post.get1stCommentBtn().click()
    await post.getCommnentField().fill(data.addComment)
    await post.getCommentSendBtn().click()
    await page.waitForTimeout(5000)
    
})


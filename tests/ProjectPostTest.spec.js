import {test, expect} from '@playwright/test'
import data from './fixture/data.json'
import dotenv from 'dotenv'
import LoginPage from './support/pages/LoginPage.spec'
import ProjectPost from './support/pages/ProjectPost.spec'
import message from './fixture/message.json'

dotenv.config({
    path: './tests/.env'
})

let page;
let login;
let post;

test.beforeEach(async({browser})=>{

    page=await browser.newPage()
    login=new LoginPage(page, data)
    post=new ProjectPost(page)
     
    await page.goto(process.env.QA)
    await login.reUsedLogin()

})

test('Verify user should be able to create a post from project noum',async()=>{

    await post.getNoumPage()
    await post.getEditorField().fill(data.projectPost)
    await post.getPostBtn().click()
    // await expect(await page.getByText('New Post Published')).toBeVisible()
    await expect(await page.getByText(message.getPostToastMessage)).toBeVisible()

})
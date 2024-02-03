import {test, expect, Page} from '@playwright/test'
import dotenv from 'dotenv'
import LoginPage from './support/pages/LoginPage.spec'
import ManageNoum from './support/pages/ManageNoumPage.spec'
import data from './fixture/data.json'





dotenv.config({
    path: './tests/.env'
})


let page;
let login;
let manage;

test.beforeEach(async({browser})=>{

    page=await browser.newPage()
    login=new LoginPage(page, data)
    manage=new ManageNoum(page)

    await page.goto(process.env.QA)
    await login.reUsedLogin()
})

test('Verify user should be able to view and click on My Noum tab', async()=>{
    await manage.getNoumTab().click()
    await manage.getMyNoumTab().click()
    // await expect(page.locator(getMyNoumTab)).toBeVisible()
    await expect(await manage.getMyNoumTab()).toBeVisible()
    await expect(await manage.getConnectedTab()).toBeVisible()
    await expect(await manage.getFollowingTab()).toBeVisible()
    await expect(await manage.getArchieveTab()).toBeVisible()
    await expect(await manage.getLinkedTab()).toBeVisible()
    await expect(await manage.getRecentlyVisitedTab()).toBeVisible()
    await expect(await manage.getAllTypesTab()).toBeVisible()

})
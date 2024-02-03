import {test, expect, Page, waitForSelector, waitForTimeout, beforeEach} from '@playwright/test'
import dotenv from 'dotenv'
import DiscoveryPage from './support/pages/DiscoveryPage.spec';
import LoginPage from './support/pages/LoginPage.spec'
import data from './fixture/data.json'
import message from './fixture/message.json'

dotenv.config({
    path: './tests/.env'
})

let page;
let login;
let discovery;

test.beforeEach(async({browser})=>{

    page= await browser.newPage()
    login=new LoginPage(page,data)
    discovery=new DiscoveryPage(page)

    await page.goto(process.env.QA)
    await login.reUsedLogin()

});

test('Verify the discovery page', async()=>{
    await discovery.getDiscoveryTab().click()
    await expect(page.getByText(message.newNoumForYourHeader)).toBeVisible()
    await expect(page.getByText(message.featureTab)).toBeVisible()
    await expect(page.getByText(message.mycircleTab)).toBeVisible()
    await expect(page.getByText(message.popularTab)).toBeVisible()
    await page.waitForTimeout(3000)
})

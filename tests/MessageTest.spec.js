import { test, expect, Page, chromium } from '@playwright/test';
import data from './fixture/data.json';
import dotenv from 'dotenv';
import LoginPage from './support/pages/LoginPage.spec';
import MessagePage from './support/pages/GlobalMessage.spec';

dotenv.config({
    path: './tests/.env'
});

let page;
let login;
let message;

test.beforeEach(async ({browser}) => {
    page = await browser.newPage();
    login = new LoginPage(page, data);
    message = new MessagePage(page, data);

    await page.goto(process.env.QA);
    await login.reUsedLogin();
});

test('Verify user should be able to send message by searching email', async()=>{
    await message.msgUserBySearchingEmail()
})
test('Verify all the tabs are clickable and visible', async()=>{
    await message.getGlobalMsgIcon().click()
    await page.waitForSelector('input[name="all"]')
    await expect(await message.getAllTabs()).toBeVisible()
    await message.getDirectTab().click()
    await expect(await message.getDirectTab()).toBeVisible()
    await message.getNoumsTab().click()
    await expect(await message.getNoumsTab()).toBeVisible()
})
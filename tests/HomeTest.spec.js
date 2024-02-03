import { test, expect, Page, beforeEach } from '@playwright/test';
import data from './fixture/data.json';
import message from './fixture/message.json';
import dotenv from 'dotenv';
import LoginPage from './support/pages/LoginPage.spec';
import HomePage from './support/pages/HomePage.spec';

dotenv.config({
    path: './tests/.env'
});

let page;
let login;
let home;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    login = new LoginPage(page, data);
    home = new HomePage(page);

    await page.goto(process.env.QA);
    await login.reUsedLogin();
});

test('Verify the home page', async () => {
    await expect(page).toHaveURL("https://noumena-web-staging.web.app/")
    await page.waitForTimeout(3000);
    await expect(page.locator(message.homeHelloText)).toBeVisible();
    await expect(page.getByText(message.YourWorkYourWayHeaderText)).toBeVisible();
    await expect(page.getByText(message.WhatNewText)).toBeVisible();
    await expect(page.getByText(message.newNoumHeaderText)).toBeVisible()


    await page.waitForTimeout(3000);
});

import LoginPage from "./support/pages/LoginPage.spec";
import { test, expect, Page, waitForTimeout } from '@playwright/test'
import message from './fixture/message.json'
import data from './fixture/data.json'
import dotenv from 'dotenv'
import MoneyPage from "./support/pages/MoneyPage.spec"

dotenv.config({
    path: "./tests/.env"
})

let page;
let login;
let money;
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    login = new LoginPage(page, data)
    money = new MoneyPage(page)
    await page.goto(process.env.QA)

    await login.reUsedLogin()
});

test('Verify the Money Page all buttons and lebels', async () => {

    await money.getMoneyTab().click()
    await expect.soft(page.locator(message.financeSolutionHeading)).toBeVisible()
    await expect.soft(page.locator(message.getCFOtext)).toBeVisible()
    await expect.soft(page.getByText(message.getCustomCapitalText)).toBeVisible()
    await expect.soft(page.getByText(message.getCaseStudyHeaderText)).toBeVisible()
    await expect.soft(page.getByText(message.getLearnMoreHeader)).toBeVisible()
    await expect.soft(page.getByText(message.getMoneyFeatureHeader)).toBeVisible()

    await money.getTokenArrow().click()
    await expect(page.getByText(message.getBalanceModal)).toBeVisible()
})

test('Verify transafer money to sub wallet', async () => {
    await money.getMoneyTab().click()
    await page.getByTestId('sticky-container').getByTestId('button').click();
    await page.locator('[data-test="Input-LableContainer"]').click();
    await page.locator('//div[contains(text(),"General")]').click()
    // await page.locator('a').filter({ hasText: 'General$5.00' }).click();
    await page.getByTestId('modal-content').getByTestId('button').click();
    await page.getByTestId('modal-content').getByTestId('stack').locator('[data-test="PaymentDescription-TextField"]').fill('$01');
    await page.locator('input[name="transactionReason"]').click();
    await page.locator('input[name="transactionReason"]').fill('hi');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    await page.getByTestId('pin-code-0').fill('1')
    await page.getByTestId('pin-code-1').fill('2')
    await page.getByTestId('pin-code-2').fill('3')
    await page.getByTestId('pin-code-3').fill('4')
    await page.getByTestId('pin-code-4').fill('5')
    await page.getByTestId('pin-code-5').fill('6')

    await page.getByRole('button', { name: 'Continue' }).click();
    // await page.getByTestId('close-button').click();
})

test('Help', async () => {
    await page.getByRole('button', { name: 'avatar Test User' }).click();
    await page.getByLabel('Help').click();
    await page.frameLocator('[data-testid="widget-frame"]').getByTestId('article-list-item-80000968660').click();
    await page.frameLocator('[data-testid="widget-frame"]').getByTestId('article-upvote').click();
    await page.frameLocator('[data-testid="widget-frame"]').getByRole('img', { name: 'Close' }).click();
});

test.only('Transfer money from card to wallet', async () => {
    await page.getByLabel('Money').click();
    await page.getByTestId('sticky-container').getByTestId('button').click();
    // await page.getByTestId('modal-content').getByTestId('svgIcon').nth(1).click();
    await page.locator('div[data-test="NonCardAccounts-Name"]').click()
    // await page.locator('a').filter({ hasText: 'Pay by Card' }).click();
    await page.locator('//div[contains(text(),"Pay by Card")]').click()
    await page.locator('[data-test="Input-LableContainer"]').click();
    // await page.locator('a').filter({ hasText: 'Main Wallet$21.86' }).click();
    await page.locator('//div[contains(text(),"Main Wallet")]').click()
    await page.getByTestId('modal-content').getByTestId('button').click();
    // await page.getByTestId('modal-content').getByTestId('stack').locator('[data-test="PaymentDescription-TextField"]').click();
    await page.getByTestId('modal-content').getByTestId('stack').locator('[data-test="PaymentDescription-TextField"]').fill('$20');
    // await page.locator('input[name="transactionReason"]').click();
    await page.locator('input[name="transactionReason"]').fill('hi');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    //pin
    await page.getByTestId('pin-code-0').fill('1')
    await page.getByTestId('pin-code-1').fill('2')
    await page.getByTestId('pin-code-2').fill('3')
    await page.getByTestId('pin-code-3').fill('4')
    await page.getByTestId('pin-code-4').fill('5')
    await page.getByTestId('pin-code-5').fill('6')




    await page.getByRole('button', { name: 'Continue' }).click();

    await page.frameLocator('iframe[name="__privateStripeFrame57110"]').getByPlaceholder('1234 1234 1234 1234').click()
    await page.frameLocator('iframe[name="__privateStripeFrame57110"]').getByPlaceholder('1234 1234 1234 1234').fill('4111 1111 1111 11111');
    await page.frameLocator('iframe[name="__privateStripeFrame57110"]').getByPlaceholder('MM / YY').click();
    await page.frameLocator('iframe[name="__privateStripeFrame57110"]').getByPlaceholder('MM / YY').fill('12 / 24');
    await page.frameLocator('iframe[name="__privateStripeFrame57110"]').getByPlaceholder('CVC').click();
    await page.frameLocator('iframe[name="__privateStripeFrame57110"]').getByPlaceholder('CVC').fill('2344');
    await page.getByTestId('modal-content').getByTestId('button').click();
    await page.getByTestId('close-button').click();
});

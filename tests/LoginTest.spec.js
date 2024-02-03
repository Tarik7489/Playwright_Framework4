// import { test, expect, Page } from '@playwright/test'
import { test, expect, Page, waitForSelector, waitForTimeout } from '@playwright/test';
import dotenv from 'dotenv'
import LoginPage from './support/pages/LoginPage.spec'
import data from './fixture/data.json'

dotenv.config({
    path: './tests/.env'
})

let login;
let page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    login = new LoginPage(page);
    await page.goto(process.env.QA);
  });


test('Verify user should be able to login with valid credentials', async () => {

    await login.autoLogin(data.email, data.otp1, data.otp2, data.otp3, data.otp4);

    await page.waitForTimeout(5000)
    await expect(page).toHaveURL('https://noumena-web-staging.web.app/')

});
test('Verify user should be able to see error message when enters invalid email', async () => {

    await login.getEmailFiled().fill(data.invalidEmail)
    await login.getEmailLoginBtn().click()

    await page.waitForSelector('text="Please enter valid email."')

    await expect(page.getByText(data.errMsgForInvalidEmail)).toBeVisible()

})
test('Verify the error message when user enter short email', async () => {

    await login.getEmailFiled().fill(data.shortEmail)
    await login.getEmailLoginBtn().click()
    await expect(page.getByText(data.errMsgForshortEmail)).toBeVisible()

})
// test.only('Verify email field is empty by default', async ({ page }) => {

//     //   const emailField= await page.locator('input[data-test="EmailLoginForm-TextField"]')

//     //   await expect(emailField).toBeEmpty()
//     await login.getEmailFiled().toBeEmpty()

test('Verify error message for invalid OTP', async () => {

    await login.getEmailFiled().fill(data.email)
    await login.getEmailLoginBtn().click()
    await login.otpFileds(data.invOtp1, data.otp2, data.otp3, data.otp4)
    await login.getNextBtn().click()
    await expect(page.getByText('Invalid code. Please try again.')).toBeVisible()

})
test('Verify by default email filed in enable', async () => {

    // await expect.soft(page.locator('input[data-test="EmailLoginForm-TextField"]')).toBeEnabled()

    const email = await page.locator('input[data-test="EmailLoginForm-TextField"]')

    await page.waitForSelector('input[data-test="EmailLoginForm-TextField"]')
    await expect(email).toBeEditable()

    // await expect.soft(page.locator(data.emailLocator)).toBeEmpty()

    //  const email=await login.getEmailFiled()
    //  await expect(email).toBeEnabled()
    //  await expect(email).toBeEditable()
    //  await expect(email).toBeEmpty()

    const phoneNumberHeader = await page.getByText('Enter phone number or email address')

    // await page.waitForSelector('text="Enter phone number or email address"')

    await expect(phoneNumberHeader).toBeVisible()

})




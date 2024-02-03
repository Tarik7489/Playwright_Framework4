import { test, expect, Page, waitForSelector, waitForTimeout , beforeEach} from '@playwright/test'



import data from './fixture/data.json'

import dotenv from 'dotenv'
import SignUpPage from './support/pages/SignUp.spec'
import message from './fixture/message.json'
import locator from './fixture/locator.json'

import LoginPage from './support/pages/LoginPage.spec'

dotenv.config({
    path: './tests/.env'
})
let page;
let signup;
let login;
test.beforeEach(async ({ browser }) => {
    page=await browser.newPage()
    signup = new SignUpPage(page);
    login = new LoginPage(page);
    await page.goto(process.env.QA);
}, { setTimeout: 60000 });


test('Verify auto active sign up flow', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()
    await signup.getEmailField().fill(data.autoActiveEmail)
    await signup.getFirstNameField().fill(data.firstName)
    await signup.getLastNameField().fill(data.lastName)
    await signup.getSignupBtn().click()

    await login.otpFileds(data.otp1, data.otp2, data.otp3, data.otp4)

    await signup.getOtpSubmitBtn().click()

    await signup.autoActiveSignUpFlow()
    await page.waitForSelector("//span[contains(text(), 'Continue to Noumena')]")
    await signup.getContinueToNoumenaBtn().click()
    await expect(page).toHaveURL(locator.homeUrl)

})
test('Verify by default sign up button is disabled', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    await expect(page.locator(locator.locatorForSubmitBtn)).toBeDisabled()

})

test('Verify user should be able to click on Signup link', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    await expect(page.getByText(message.signupHeaderText)).toBeVisible()

})
test('Verify the error message when user enters invalid email', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()
    await signup.getEmailField().fill(data.invalidEmail)
    await expect(page.getByText(message.errMsgForshortEmail)).toBeVisible()

})
test('Verify the error message when email field is empty', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    const email = await signup.getEmailField()

    await email.fill(data.invalidEmail)

    await email.clear()

    await expect(page.getByText(message.errMsgFrEmptyField)).toBeVisible()


})
test('Verify the error message when first name field is short', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    await signup.getFirstNameField().fill(data.shortName)
    await expect(page.getByText(message.errMsgForshortName)).toBeVisible()

})
test('Verify the error message when first name field is long', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    await signup.getFirstNameField().fill(data.longName)
    await expect(page.getByText(message.errMsgForLongName)).toBeVisible()

})
test('Verify the error message when first name field is empty', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    const firstName = await signup.getFirstNameField()

    await firstName.fill(data.longName)
    await firstName.clear()

    await expect(page.getByText(message.errMsgFrEmptyField)).toBeVisible()

})
test('Verify the error message when user enters incorrect number', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    await signup.getNumberField().fill(data.incorrectNumber)
    await expect(page.getByText(message.errMsgForIncorrectNumber)).toBeVisible()

})
test('Verify the error message when user enters min referral code', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    await signup.getReferralCodeField().fill(data.minReferralCode)
    await expect(page.getByText(message.errMsgForMinCode)).toBeVisible()

})
test('Verify the error message when user enters max referral code', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    await signup.getReferralCodeField().fill(data.maxReferralCode)
    await expect(page.getByText(message.errMsgForMaxCode)).toBeVisible()

})
test('Verify the error message when user enters invalid referral code', async () => {
    await page.waitForSelector("span[data-testid='signUp']");
    await signup.getSignUpLink().click()

    await signup.getReferralCodeField().fill(data.invalidCode)
    await expect(page.getByText(message.errMsgForInvalidCode)).toBeVisible()

})


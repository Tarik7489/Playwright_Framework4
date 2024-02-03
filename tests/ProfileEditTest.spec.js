import { test, expect } from '@playwright/test'
import { Page } from '@playwright/test'
import data from './fixture/data.json'

import message from './fixture/message.json'

import dotenv from 'dotenv'
import LoginPage from './support/pages/LoginPage.spec'
import EditProfilePage from './support/pages/EditProfile.spec'

dotenv.config({
    path: './tests/.env'
})

let page;
let login;
let profile;


test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    login = new LoginPage(page, data)
    profile = new EditProfilePage(page)

    await page.goto(process.env.QA)
    await login.reUsedLogin()

})

test('Verify user should be able to edit the profile details', async () => {
    await profile.navigateToEditDetailsScreen()

    const firstInputField = await profile.getFirstNameField()
    await firstInputField.fill('')
    await firstInputField.fill(data.editFirstName)
   
    const lastInputField = await profile.getLastNameField()
    await lastInputField.fill('')
    await lastInputField.fill(data.editLastName)

    const titleInputField = await profile.getTitleField()
    await titleInputField.fill('')
    await titleInputField.fill(data.editTitle)

    const aboutInputField = await profile.getAboutFiled()
    await aboutInputField.fill('')
    await aboutInputField.fill(data.editAbout)

    await profile.getSaveBtn().click()
    await expect(await page.getByText(message.updateProfileToastMsg)).toBeVisible()
   
})
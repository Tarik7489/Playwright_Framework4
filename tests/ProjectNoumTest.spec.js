import {test, expect, Page} from '@playwright/test'
import dotenv from 'dotenv'
import LoginPage from './support/pages/LoginPage.spec'
import ProjectNoum from './support/pages/ProjectNoumPage.spec'
import data from './fixture/data.json'



dotenv.config({
    path: './tests/.env'
})

let page;
let login;
let project;

test.beforeEach(async({browser})=>{
    page= await browser.newPage()
    login=new LoginPage(page, data)
    project=new ProjectNoum(page)

    await page.goto(process.env.QA)
    await login.reUsedLogin()
})

test('Create a project noum with image', async()=>{
    await project.getPlucicon().click()
    await project.getNoumBtn().click()
    await project.getUploadFile().setInputFiles('tests/fixture/Test.png')
    await project.getNameField().fill(data.projectNoumName)
    await project.getCreateNoumBtn().click()
    await expect(page.getByText('Noum Created')).toBeVisible()

})
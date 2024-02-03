import { test, expect } from '@playwright/test'
import data from './fixture/data.json'
import dotenv from 'dotenv'
import InviteNonNm from './support/pages/inviteNon-Nm.spec'
import LoginPage from './support/pages/LoginPage.spec'

import message from './fixture/message.json'
import ProjectPost from './support/pages/ProjectPost.spec'

dotenv.config({
    path: './tests/.env'
})

let page;
let login;
let invite;
let project;

test.beforeEach(async ({ browser }) => {

    page = await browser.newPage(page)
    login = new LoginPage(page, data)
    invite = new InviteNonNm(page, data)
    project=new ProjectPost(page)

    await page.goto(process.env.QA)
    await login.reUsedLogin()

    await project.getNoumEditScreen()

});

test('Verify user should be able to invite non nm using new user',async()=>{
  await  invite.inviteNonNmWithNewUser()

})
import {test, expect, Page} from '@playwright/test'
import dotenv from 'dotenv'
import data from './fixture/data.json'
import message from './fixture/message.json'
import EventPage from './support/pages/EventPage.spec'

import LoginPage from './support/pages/LoginPage.spec'

dotenv.config({
    path: './tests/.env'
})

let page;
let login;
let sh;

test.beforeEach(async({browser})=>{
    page= await browser.newPage()
    login=new LoginPage(page, data)
    sh=new EventPage(page)

    await page.goto(process.env.QA)
    await login.reUsedLogin()

});

test('Verify user should be able to create a instant event without attendees', async()=>{
    await sh.instantEventWithoutAttendee()
    await expect(page.getByText(message.endEventToastMsg)).toBeVisible()
})
test('Verify user should be able to message in social hall', async()=>{
   
   await sh.getStarEventScreen()
   await sh.getChatBtn().click()
   await sh.getChatField().fill(message.shMessage)
   await sh.getSendMsgIcon().click()
   await sh.getClsIconForMsgWindow().click()
   await sh.getEndEventBtn().click()
   await sh.getConfirmEndEvtBtn().click()
   await expect(page.getByText(message.endEventToastMsg)).toBeVisible()
})

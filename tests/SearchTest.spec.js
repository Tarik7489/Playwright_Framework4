import {test, expect} from '@playwright/test'
import Page from '@playwright/test'
import data from './fixture/data.json'
import dotenv from 'dotenv'
import LoginPage from './support/pages/LoginPage.spec'
import SearchPage from './support/pages/SearchPage.spec'

dotenv.config({
    path: './tests/.env'
})



let page;
let login;
let search;

test.beforeEach(async ({browser})=>{

    page= await browser.newPage()
    login=new LoginPage(page, data)
    search=new SearchPage(page)

    await page.goto(process.env.QA)
    await login.reUsedLogin()
})

test('Verify user should be able to search member', async()=>{
    await search.getSearchField().fill(data.searchMember)
    await search.getSeeAllResultsLink().click()
    await search.getMembersTab().click()
    await expect (page).toHaveURL('https://noumena-web-staging.web.app/search?text=Monster%20King')
})
test('Verify user should be able to search Noums', async()=>{
    await search.getSearchField().fill(data.searchNoums)
    await search.getSeeAllResultsLink().click()
    await search.getNoumsTab().click()
    await expect (page).toHaveURL('https://noumena-web-staging.web.app/search?text=BNNN')
})
test.only('Verify user should be able to search post', async()=>{
    await search.getSearchField().fill(data.searchPost)
    await search.getSeeAllResultsLink().click()
    await search.getPostTab().click()
    await expect (page).toHaveURL('https://noumena-web-staging.web.app/search?text=iftikar')
})



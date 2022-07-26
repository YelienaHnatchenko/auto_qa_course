import {sign_in} from "../selectors/sign_in";
describe('UI tests for sign in page', () => {

    before('visiting sign in page', () => {
        cy.visit('/')
    })
    it('should show "Real World App logo"', () => {
        cy.get(sign_in.logo_image).should('be.visible').and('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
    })

    it('should show "Sign in" title', () => {
        cy.get(sign_in.title_text).should('be.visible').and('have.text', 'Sign in')
    })
    // Homework 14.07:
    // 1-2. should show typeable Username and Password fields
    it('should show typeable Username field', () => {
        cy.get(sign_in.username_field).should('be.visible')
    })
    it('should show typeable Password field', () => {
        cy.get(sign_in.password_field).should('be.visible')
    })
    // 3. should show Username and Password placeholders
    it('should show Username placeholder', () => {
        cy.get(sign_in.username_placeholder).should('be.visible')
    })
    it('should show Password placeholder', () => {
        cy.get(sign_in.password_placeholder).should('be.visible')
    })
    // 4. should show 'Username is required' error if user clicks on it and then click outside this field and didn't enter any value
    it('should show Username is required error if user clicks on it and then click outside this field and didnt enter any value',() => {
        cy.get(sign_in.username_placeholder).should('be.visible').click().and('have.attr','value','')
        cy.get('.makeStyles-root-1').click()
        cy.get(sign_in.user_is_required_text).should('be.visible')
    })
    // 5. check "Remember me" checkbox
    it('check "Remember me" checkbox', () => {
        cy.get('.MuiFormControlLabel-root').should('be.visible')
        cy.get(sign_in.remember_me_checkbox).check()
        cy.get(sign_in.remember_me_checkbox).uncheck()
    })
    // 6. should show disabled by default sign in btn
    it('should show disabled by default sign in btn', () => {
        cy.get(sign_in.disabled_sign_btn).should('be.visible').and('be.disabled')
    })
    // 7. should have 'Don't have an account? Sign Up' clickable link under 'Sign in' btn
    it('should have ~Dont have an account? Sign Up~ clickable link under ~Sign in~ btn', () => {
        cy.get(sign_in.dont_have_acc_link).should('be.visible').click()
        cy.visit('/')
    })
    // 8. should show Cypress copyright link that leads to 'https://www.cypress.io/'
    it('should show Cypress copyright link that leads to ~https://www.cypress.io/~', () => {
        cy.get(sign_in.cypress_copyright).should('be.visible').and('have.attr','href', 'https://cypress.io')
    })
    // Homework 19.07:
// 1. should allow a visitor to sign-up
// 2. should allow a visitor to login
// 3. should allow a visitor to logout
// -----------------------------------

// Homework 21.07
// 4. should display login errors
// 5. should display signup errors
// 6. should error for an invalid user
// 7. should error for an invalid password for existing user
//  -------------------------------
// create new spec file for bank_accounts tests, automate following tests:
// 1. creates a new bank account
// 2. should display bank account form errors
// 3. user should be able to delete a bank account

// + create Cypress custom command for user ui_sign_up, ui_login, ui_logout, ui_onboarding
})

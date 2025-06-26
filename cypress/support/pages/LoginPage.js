class LoginPage {
    visit() {
        cy.visit('https://www.kabum.com.br/login');
    }

    preencherEmail(email) {
        cy.get('input[data-testid="login-input"]').type(Cypress.env('EMAIL'));
    }

    preencherSenha(senha) {
        cy.get('input[data-testid="password-input"]').type(Cypress.env('PASSWORD'));
    }

    clicarLogin() {
        cy.get('button[data-testid="login-submit-button"]').click();
    }

    validarLogin() {
        cy.get('input[placeholder="Busque no KaBuM!"]', { timeout: 10000 }).should('be.visible');
    }
}

export default new LoginPage();

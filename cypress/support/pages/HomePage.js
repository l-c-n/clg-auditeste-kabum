class HomePage {
    buscarProduto(produto) {
        cy.get('input[placeholder="Busque no KaBuM!"]').clear().type(`${produto}{enter}`);
    }

    clicarPrimeiroResultado() {
        cy.get('.productCard', { timeout: 10000 }).first().click();
        cy.url({ timeout: 10000 }).should('include', '/produto/');
    }
}

export default new HomePage();

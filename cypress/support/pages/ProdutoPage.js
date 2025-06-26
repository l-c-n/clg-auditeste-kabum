class ProdutoPage {
    adicionarAoCarrinho() {
        cy.contains('button', 'COMPRAR', { timeout: 10000 })
            .scrollIntoView()
            .should('exist')
            .click({ force: true });
    }
}

export default new ProdutoPage();

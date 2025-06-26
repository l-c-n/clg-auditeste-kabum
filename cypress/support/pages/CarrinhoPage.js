class CarrinhoPage {
  acessarCarrinho() {
    // Vai direto para o carrinho verdadeiro
    cy.visit('https://www.kabum.com.br/carrinho');

    // Aguarda algo típico do carrinho aparecer
    // cy.contains('Resumo do pedido', { timeout: 10000 }).should('be.visible');
  }

  removerProduto() {
    cy.contains('button', 'Remover', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click();

    cy.contains('button', 'Sim', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  validarProdutoRemovido() {
    cy.contains('O seu carrinho está vazio.', { timeout: 10000 }).should('be.visible');
  }
}

export default new CarrinhoPage();

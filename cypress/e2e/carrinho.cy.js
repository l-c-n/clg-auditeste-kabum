/// <reference types="cypress" />


import LoginPage from '../support/pages/LoginPage';
import HomePage from '../support/pages/HomePage';
import ProdutoPage from '../support/pages/ProdutoPage';
import CarrinhoPage from '../support/pages/CarrinhoPage';

describe('Gerenciamento de Carrinho de Compras', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err) => {
            const ignorar = [
                'Script error',
                'Minified React error',
                'ResizeObserver loop limit exceeded',
                'Cannot read properties of undefined',
            ];
            if (ignorar.some(e => err.message.includes(e))) return false;
        });

        cy.visit('https://www.kabum.com.br/login');
    });

    it('LOGIN + ADCIONAR + REMOVER Produto do carrinho', () => {
        
        // Login
        cy.intercept('POST', '**/login/v3/usuario/auth').as('loginRequest');
        LoginPage.preencherEmail(Cypress.env('EMAIL'));
        LoginPage.preencherSenha(Cypress.env('PASSWORD'));
        LoginPage.clicarLogin();
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
        LoginPage.validarLogin();

        // Buscar e selecionar produto
        HomePage.buscarProduto('mouse gamer');
        HomePage.clicarPrimeiroResultado();

        // Adicionar ao carrinho
        ProdutoPage.adicionarAoCarrinho();

        // Ir para o carrinho e remover produto
        CarrinhoPage.acessarCarrinho();
        CarrinhoPage.removerProduto();
        CarrinhoPage.validarProdutoRemovido();
    });
});

# 💼 Cypress - Desafio de Automacao Kabum

Este projeto realiza a automação de um fluxo de **compra e remoção de produto no carrinho** no site [Kabum!](https://www.kabum.com.br), utilizando **Cypress** com padrão **Page Object Model (POM)**, integração contínua com **GitHub Actions** e controle seguro de credenciais via `.env`.

---

## 🧪 Cenário do Desafio

> Efetuar uma compra e remover do carrinho:

* Dado que o usuário está logado no marketplace
* E o usuário está na página de um produto
* Quando o usuário clica no botão "Adicionar ao Carrinho"
* Então o produto é adicionado ao carrinho
* E o usuário vê uma mensagem de confirmação "Produto adicionado ao carrinho"
* Dado que o usuário está na página do carrinho
* Quando o usuário clica no botão "Remover"
* Então o produto é removido do carrinho
* E o usuário vê uma mensagem de confirmação "Produto removido do carrinho"

---

## ⚙️ Tecnologias e Ferramentas

* [Cypress](https://www.cypress.io/) v12+
* Node.js v18+
* JavaScript (ES6)
* Dotenv para variáveis de ambiente
* Estrutura Page Object Model (POM)
* GitHub Actions para CI
* Teste em ambiente de produção (com proteção de credenciais)

---

## 📁 Estrutura de Pastas (POM)

```
cypress/
├── e2e/
│   └── carrinho.cy.js              # Teste principal
├── support/
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── HomePage.js
│   │   ├── ProdutoPage.js
│   │   └── CarrinhoPage.js
│   └── commands.js
├── fixtures/                       # (não utilizado neste desafio)
.env                                # Suas credenciais (NÃO subir pro Git!)
.env.example                        # Exemplo do .env
```

---

## 🔐 Configuração do Ambiente (.env)

Crie um arquivo `.env` na raiz do projeto:

```env
CYPRESS_EMAIL=seuemail@exemplo.com
CYPRESS_PASSWORD=suasenhasegura
```

E **NÃO** suba esse arquivo para o Git. Garanta que ele está no seu `.gitignore`:

```bash
.env
```

Crie também um `.env.example`:

```env
CYPRESS_EMAIL=seu@email.com
CYPRESS_PASSWORD=sua_senha_segura
```

---

## ▶️ Como Rodar Localmente

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo `.env` conforme o exemplo acima
4. Execute os testes:

```bash
npx cypress open      # Interface interativa
npx cypress run       # Headless (modo CI)
```

---

## 🚀 CI/CD com GitHub Actions

O projeto inclui um workflow `cypress.yml` para rodar os testes a cada push ou pull request no `main`.

### ✔️ Como ativar no seu repo

1. Acesse `Settings` > `Secrets and variables` > `Actions`
2. Adicione os segredos:

| Nome               | Valor                                               |
| ------------------ | --------------------------------------------------- |
| `CYPRESS_EMAIL`    | [seuemail@exemplo.com](mailto:seuemail@exemplo.com) |
| `CYPRESS_PASSWORD` | suasenhasegura                                      |

3. Pronto! O CI vai rodar os testes automaticamente.
   Você pode acompanhar na aba **Actions** do seu repositório.

---

## ✅ O que o teste faz

* Acessa o site do Kabum
* Realiza login via formulário
* Busca por um produto real (“mouse gamer”)
* Adiciona ao carrinho
* Acessa o carrinho real
* Remove o produto e valida a remoção

---

## 👨‍💻 Autor

**Leonardo** – QA em busca de evolução 🚀
Desenvolvido como parte de um desafio técnico com foco em boas práticas, organização de código e automação confiável.

---

## 🛡️ Aviso

Este projeto interage com o site de produção do [Kabum!](https://www.kabum.com.br) com fins exclusivamente educativos.
As credenciais usadas são reais, mas protegidas via `.env`. **Nunca compartilhe dados sensíveis em código-fonte.**

---

## ⭐ Quer contribuir ou adaptar?

Fique à vontade para clonar, adaptar e evoluir esse projeto para outras features, fluxos ou até automações via API. Bora automatizar com qualidade!

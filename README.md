# 🚀 PROJETO FULL STACK: CRUD DE USUÁRIOS

## Introdução

Este projeto demonstra a construção e integração de uma aplicação **Full Stack** completa, utilizando as melhores práticas do mercado para criar um sistema de **Cadastro, Leitura e Exclusão (CRUD)** de usuários.

A aplicação segue uma arquitetura separada, onde o **Back-end** (`EXEAPI`) é responsável pela lógica e dados, e o **Front-end** (`CADASTRO-DE-USUARIO`) é responsável pela interface do usuário.

---

## 💻 Stack Tecnológica

| Categoria | Tecnologia | Função |
| :--- | :--- | :--- |
| **Back-end** | **Node.js** | Ambiente de execução do JavaScript. |
| **Framework API** | **Express** | Criação de rotas HTTP e middlewares. |
| **ORM** | **Prisma** | Ferramenta moderna para conexão e consulta ao banco de dados (CRUD). |
| **Banco de Dados** | **MongoDB** | Banco de dados NoSQL (ou outro, conforme configurado no Prisma). |
| **Front-end** | **React** | Biblioteca JavaScript para construção da interface. |
| **Comunicação** | **Axios / Fetch** | Gerenciamento de requisições HTTP entre Front-end e API. |

---

## 🗂️ Estrutura do Projeto

O repositório está organizado em duas subpastas independentes.

| Pasta | Conteúdo | Porta de Execução |
| :--- | :--- | :--- |
| `EXEAPI` | **API REST (Back-end)**. Servidor, lógica e acesso ao Prisma. | `http://localhost:3000` |
| `CADASTRO-DE-USUARIO` | **Aplicação Web (Front-end)**. Componentes React e interface de cadastro. | `http://localhost:3000` (ou `3001`) |

## 🧭 Endpoints da API

A API expõe os seguintes endpoints na rota base `/usuarios`:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/usuarios` | Lista todos os usuários cadastrados. |
| `POST` | `/usuarios` | Cria um novo usuário (`name`, `email`, `age`). |
| `PUT` | `/usuarios/:id` | Atualiza um usuário específico. |
| `DELETE` | `/usuarios/:id` | Remove um usuário do banco de dados. |

---

## ⚙️ Configuração e Execução Local

Siga estes passos sequenciais em dois terminais separados para iniciar a aplicação:

### Passo 1: Iniciar o Back-end (API)

1.  Abra o primeiro terminal e navegue para a pasta `EXEAPI`.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Configure o arquivo `.env` com a sua string de conexão.
4.  Gere o cliente Prisma:
    ```bash
    npx prisma generate
    ```
5.  Inicie o servidor:
    ```bash
    npm run dev
    ```

### Passo 2: Iniciar o Front-end (React)

1.  Abra um **segundo terminal** e navegue para a pasta `CADASTRO-DE-USUARIO`.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie a aplicação:
    ```bash
    npm start
    ```
🙏 Agradecimentos

Este projeto foi desenvolvido com base nos conhecimentos adquiridos através dos tutoriais de Full Stack e React fornecidos pelo DevClub.

## 🤝 Autor

* **Marcelo Samuel Martins Lallo Filho**
* GitHub: `https://github.com/Lall0`

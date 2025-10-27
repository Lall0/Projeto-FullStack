🚀 PROJETO FULL STACK DE CADASTRO DE USUÁRIOS

Este é um projeto Full Stack desenvolvido para demonstrar a integração completa entre um Back-end robusto (Node.js + Prisma) e um Front-end moderno (React) para operações de CRUD (Create, Read, Update, Delete).

🗂️ Estrutura do Repositório

O projeto está organizado em duas pastas principais, cada uma contendo seu próprio ambiente e dependências.

Pasta

Descrição

Tecnologia Principal

EXEAPI

Contém o código do Back-end (API REST). Responsável pela lógica de negócios, conexão com o banco de dados e exposição dos endpoints.

Node.js, Express, Prisma

CADASTRO-DE-USUARIO

Contém o código do Front-end (Web Application). Responsável pela interface do usuário e consumo da API.

React

🛠️ Tecnologias Utilizadas

Categoria

Tecnologia

Função

Back-end

Node.js

Ambiente de execução.

Framework

Express

Criação e gerenciamento de rotas da API.

ORM

Prisma

Camada de abstração e query builder para interação com o banco de dados.

Banco de Dados

MongoDB

Banco de dados NoSQL (ou outro, conforme configurado no Prisma).

Front-end

React

Construção da interface de usuário dinâmica.

Comunicação

Axios / Fetch

Biblioteca para consumo da API no Front-end.

Ferramentas

Git / GitHub

Controle de versão.

🧭 Endpoints da API (/EXEAPI)

Todos os endpoints utilizam a rota base /usuarios e são essenciais para o funcionamento do CRUD no Front-end.

Método

Rota

Descrição

GET

/usuarios

Retorna uma lista com todos os usuários cadastrados.

POST

/usuarios

Cria um novo usuário. Requer name, email e age no corpo da requisição (JSON).

PUT

/usuarios/:id

Atualiza os dados de um usuário específico. Requer o ID na URL e os dados a serem alterados no corpo (JSON).

DELETE

/usuarios/:id

Remove um usuário específico do banco de dados. Requer o ID na URL.

⚙️ Como Configurar e Rodar o Projeto Localmente

Para iniciar o projeto, é necessário rodar o Back-end e o Front-end em terminais separados.

Pré-requisitos

Certifique-se de ter instalado em sua máquina:

Node.js (versão 16.x ou superior)

npm (gerenciador de pacotes)

O servidor de banco de dados (ex: uma instância local do MongoDB ou PostgreSQL).

1. Configurar e Iniciar o Back-end (EXEAPI)

Navegue até a pasta da API no seu terminal:

cd EXEAPI



Instale as dependências:

npm install



Configurar o Prisma: Copie o arquivo .env.example para .env e configure sua DATABASE_URL.
Se estiver usando Prisma, gere o cliente e faça as migrações (se aplicável):

npx prisma generate
# Se estiver usando banco de dados relacional (ex: PostgreSQL):
# npx prisma migrate dev --name init 



Inicie o servidor da API (rodará em http://localhost:3000):

npm run dev  # ou npm start



Nota de Conflito: Se o Front-end (React) rodar na porta 3000, o React se moverá automaticamente para a porta 3001.

2. Configurar e Iniciar o Front-end (CADASTRO-DE-USUARIO)

Abra um novo terminal e siga estes passos:

Navegue até a pasta do Front-end:

cd ../CADASTRO-DE-USUARIO



Instale as dependências:

npm install



Verifique o Serviço API: Confirme no arquivo src/services/api.js que a URL base está apontando para o servidor do Back-end (ex: http://localhost:3000).

Inicie a aplicação React (por padrão, abrirá em http://localhost:3000 ou 3001):

npm start  # ou npm run dev



✅ Resultado: O Front-end será aberto no seu navegador e começará a se comunicar com a API que está rodando no terminal ao lado.

🤝 Contribuição

Sinta-se à vontade para inspecionar, usar ou sugerir melhorias neste código.
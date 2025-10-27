import express from 'express';
// Importação do cors com a sintaxe ES Module (necessário devido ao "type": "module" no package.json)
import cors from 'cors'; // <--- CORREÇÃO AQUI

// Este caminho deve corresponder ao 'output' no seu schema.prisma, que definimos como 'prisma_client'
import { PrismaClient } from './prisma_client/index.js'; 

const prisma = new PrismaClient();
const app = express(); // Movemos a declaração para depois dos imports

// Configuração do Express para aceitar JSON no corpo das requisições
app.use(express.json());
app.use(cors()); // <--- Middleware CORS ativado

// Rota POST para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                // Garante que a idade é um Int
                age: parseInt(req.body.age) 
            }
        });
        
        res.status(201).json(newUser);
    } catch (error) {
        //retorna erro 500 e imprime o erro no console
        console.error("Erro no POST:", error.message);
        res.status(500).json({ error: "Erro interno do servidor ao criar usuário." });
    }
});

// Rota PUT para atualizar um usuário
app.put('/usuarios/:id', async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                // Você pode precisar converter o ID dependendo de como ele é armazenado no Prisma (Int vs String)
                // Se o ID for string (UUID), use req.params.id diretamente.
                // Se for Int, use: id: parseInt(req.params.id)
                id: req.params.id 
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                // O parseInt aqui é essencial para evitar o erro String -> Int
                age: parseInt(req.body.age) 
            }
        });
        // Retorna o usuário atualizado
        res.status(200).json(updatedUser); 
    } catch (error) {
        // Retorna erro 500 e imprime o erro no console
        console.error("Erro no PUT:", error.message);
        res.status(500).json({ error: "Erro interno do servidor ao atualizar usuário." });
    }
});

// Rota DELETE para deletar um usuário
app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
        // Retorna erro 500 e imprime o erro no console
        console.error("Erro no DELETE:", error.message);
        res.status(500).json({ error: "Erro interno do servidor ao deletar usuário." });
    }
});

// Rota GET para listar todos os usuários (agora com try/catch, boa prática)
app.get("/usuarios", async (req, res) => {
    try {
        // Busca todos os usuários no banco de dados
        const usuarios = await prisma.user.findMany(); 
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Erro no GET:", error.message);
        res.status(500).json({ error: "Erro interno do servidor ao buscar usuários." });
    }
});


// Inicialização do servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});
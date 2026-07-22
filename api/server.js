import express from 'express'
import cors from 'cors'
import pkg from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const { PrismaClient } = pkg;

const adapter = new PrismaMariaDb({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'jujutsoMusics',
    connectionLimit: 5,
})

const prisma = new PrismaClient({ adapter });

const app = express() ;
app.use(express.json());
app.use(cors());


// Página: Cadastro
app.post('/cadastro', async (req, res) => {
    const { nome, idade, telefone, login, senha } = req.body;

    try {
        const usuarioExistente = await prisma.user.findUnique({
        where: { login }
        });

        if (usuarioExistente) {
            return res.status(400).json({ erro: 'Login já está em uso.' });
        }

        const novoUsuario = await prisma.user.create({
            data: { nome, idade, telefone, login, senha }
        });

        return res.status(201).json(novoUsuario);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro ao cadastrar usuário.' });
    }
})


// Porta do Cadastro
app.listen(3000)
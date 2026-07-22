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

        if (nome === "" || idade === "" || telefone === "" || login === "" || senha === "") {
            return res.status(403).json({ erro: 'Campo vazio! Preencha todos os campos' });
        }

        if (usuarioExistente) {
            return res.status(402).json({ erro: 'Login já está em uso.' });
        }

        const novoUsuario = await prisma.user.create({
            data: { nome, idade, telefone, login, senha }
        });

        return res.status(201).json(novoUsuario);

    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar usuário.' });
    }
})

// Página: Login
app.post('/login', async (req, res) => {

    let users = [];

    users = await prisma.user.findMany ({
        where: {
            login: req.body.login,
            senha: req.body.senha
        }
    });

    if (users.length == 0) {
        return res.status(400).json({ erro: "Seu login ou senha está incorreto(a)."});
    }  else {
        return res.status(201).json(users);
    }
})

// Página: Recuperar senha - Verificacao
app.post('/recuperarSenha/verificacao/:login', async (req, res) => {

    let users = [];

    users = await prisma.user.findMany({
        where: {
            login: req.params.login
        }
    });

    if (users.length == 0) {
        return res.status(400).json({ erro: "Nome de usuário inválido."});
    } else {
        return res.status(201).json(users);
    }

})

// Página: Recuperar senha - Altareção
app.patch('/recuperarSenha/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            senha: req.body.senha
        }
    })

    res.status(201).json(req.body)

})


// Porta 
app.listen(3000)

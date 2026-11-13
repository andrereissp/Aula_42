import { listarTarefas, buscarPorUsuario, obterTarefasComUsuario  } from "./services/tarefaService.js";
import express from 'express';
import './models/associations.js'; // Obrigatorio para o JSON com 'criador' funcionar
import tarefaRoutes from './routers/tarefaRoutes.js';


const app = express();
app.use(express.json());

app.use(tarefaRoutes);

const PORTA = 3000;

async function iniciarServidor() {
    try {
        //Testar conexão e cria as tabelas no Postgres caso ainda não existir
        console.log('Banco de dados conectado e tabelas sincronizadas! ');

        app.listen(PORTA, () => {
            console.log(`Servidor rodando em http://localhost:${PORTA}/tarefas`);
        });            
    } catch (erro) {
        console.log('Erro ao iniciar o sevidor:', erro);
    }    
}

iniciarServidor();

async function testarConsultas() {
    try {
        console.log('--- 1. Todas as tarefas ---');
        const todas = await listarTarefas();
        console.log(todas);

        console.log('\n--- 2. Tarefas do usuário 1 ---');
        const doUsuario = await buscarPorUsuario(8);
        console.log(doUsuario);

        console.log('\n--- 3. Tarefas com informações do usuário ---');
        const comUsuario = await obterTarefasComUsuario(4);
        console.log(comUsuario);

    } catch (error) {
        console.error('Erro ao execultar consulta:', error);
    }
}

//testarConsultas();
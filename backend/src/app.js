// import { listarTarefas,buscarPorUsuario, obterTarefasComUsuario } from './services/tarefaService.js';
import express from 'express';
import cors from 'cors';
import './models/associations.js'; // Obrigatório para o JOIN com 'criador' funcionar
import tarefaRoutes from './routers/tarefaRoutes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(tarefaRoutes);

const PORTA = 3000;

async function iniciarServidor() {
  try {
    // Testa a conexão e cria as tabelas no Postgres caso ainda não existam
    console.log('Banco de dados conectado e tabelas sincronizadas!');

    app.listen(PORTA, () => {
      console.log(`Servidor rodando em http://localhost:${PORTA}/tarefas`);
    });
  } catch (erro) {
    console.error('Erro ao iniciar o servidor:', erro);
  }
}

iniciarServidor();


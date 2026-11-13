import { listarTarefas, buscarPorUsuario, obterTarefasComUsuario  } from "./services/tarefaService.js";

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

testarConsultas();
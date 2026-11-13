import { listarTarefas, listarTarefasSequelize } from "../services/tarefaService.js";

export const getTarefas = async(req, res) => {
    try {
        const tarefas = await listarTarefasSequelize();
        return res.status(200).json(tarefas);
    } catch (error) {
        console.error('DETALHE DO ERRO:', error);
        return res.status(500).json({ erro: 'Erro ao buscr tarefas.'});
    }
};
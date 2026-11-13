import { pool } from '../config/bancoDeDados.js';

export const listarTarefas = async () => {
    const resultado = await pool.query('SELECT * FROM tarefas');

    return resultado.rows;
};
export const buscarPorUsuario = async (usuarioId) => {
    const query = 'SELECT * FROM tarefas WHERE usuario_id = $1';

    const  { rows } = await pool.query(query, [usuarioId]);

    return rows;
}; 

export const obterTarefasComUsuario = async () => {
    const query = 'SELECT tarefas.id, tarefas.titulos, tarefas.concluido, usuario.nome AS usuario_nome From tarefas INNER JOIN usuario ON tarefas.usuario_id = usuario.id';

    const { rows } = await pool.query(query);
    return rows;
};


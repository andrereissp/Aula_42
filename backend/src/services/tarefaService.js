import { pool } from '../config/bancoDeDados.js';
import { Tarefa } from '../models/tarefa.js';
import { Usuario } from '../models/usuario.js';

export const listarTarefas = async () => {
  const resultado = await pool.query(
    'SELECT * FROM tarefas'
  );

  // Array com os registros do banco
  return resultado.rows;
};

export const buscarPorUsuario = async (usuarioId) => {
  const query =
    'SELECT * FROM tarefas WHERE usuario_id = $1';

  const { rows } = await pool.query(query,[usuarioId]);

  return rows;
};

export const obterTarefasComUsuario = async () => {
  const query = 'SELECT tarefas.id, tarefas.titulos, tarefas.concluido, usuario.nome AS usuario_nome FROM tarefas INNER JOIN usuario ON tarefas.usuario_id = usuario.id';

  const { rows } = await pool.query(query);
  return rows;
};

export const listarTarefasSequelize = async () => {
  return await Tarefa.findAll({
    attributes: ['id', 'titulos', 'concluido'],
    include: [{
      model: Usuario,
      as: 'criador',
      attributes: ['id', 'nome', 'email'],
      required: true
    }]
  });
};



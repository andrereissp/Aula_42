import { Usuario } from "./usuario.js";
import { Tarefa } from "./tarefa.js";

// Um usuàrio tem  muitas tarefas (1:N)
Usuario.hasMany(Tarefa, { foreignKey: 'usuario_id' });

//Uma tarefa pertence a um usuàrio (N:1)
Tarefa.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'criardor' });
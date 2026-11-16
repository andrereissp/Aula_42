import { DataTypes } from "sequelize";
import { sequelize } from "../config/bancoDeDados.js";

export const Tarefa = sequelize.define('Tarefa',  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
}, {
    tableName: 'tarefas',
    timestamps: false
});
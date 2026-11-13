import { DataTypes } from "sequelize";
import { sequelize } from "../config/bancoDeDados.js";

export const Tarefa = sequelize.define('Tarefa',  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    concluir: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
}, {
    tableName: 'tarefas',
    timestamps: false
});
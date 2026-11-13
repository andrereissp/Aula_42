import pg from "pg";
import { Sequelize } from "sequelize";
import 'dotenv/config';

// Manter sua conexçaõ anyiga para as finçoes com SQL pura
export const pool = new pg.Pool ({
    connectionString: process.env.DATABASE_URL
});

// Adcionar uma nova conexão para os Models do Sequelize
export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
});

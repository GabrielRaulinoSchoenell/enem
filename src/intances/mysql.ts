import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DBNAME as string,
    process.env.DBUSER as string,
    process.env.DBPASS as string,
    {
        dialect: 'mysql',
        port: parseInt(process.env.DBPORT as string)
    }
);
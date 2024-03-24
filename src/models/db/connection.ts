import dotenv from 'dotenv';
import {createPool, Pool} from 'mysql2/promise';

dotenv.config();

export const connection: Pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    port: Number(process.env.DB_PORT)
});





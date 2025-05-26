import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('=== ENV DEBUG ===');
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS, typeof process.env.DB_PASS);
console.log('=================');

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
});

pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL DB'))
  .catch((err) => console.error('❌ DB Connection error:', err));

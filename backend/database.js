import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

// Conectar a la base de datos Supabase usando la URL del .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
});

// Inicialización asíncrona sin callbacks usando await pool.query
const initDb = async () => {
  try {
    console.log('Conectando a PostgreSQL mediante Pool...');
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        session_id VARCHAR(255),
        is_form BOOLEAN DEFAULT FALSE,
        text TEXT NOT NULL,
        sender VARCHAR(50) NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Tabla "messages" lista en PostgreSQL.');
    
    await pool.query('ALTER TABLE messages ADD COLUMN IF NOT EXISTS session_id VARCHAR(255)').catch(() => {});
    await pool.query('ALTER TABLE messages ADD COLUMN IF NOT EXISTS is_form BOOLEAN DEFAULT FALSE').catch(() => {});

    await pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        empresa VARCHAR(255),
        telefono VARCHAR(50),
        mensaje TEXT,
        origen VARCHAR(50) DEFAULT 'formulario',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Tabla "leads" lista en PostgreSQL.');
    
    await pool.query('ALTER TABLE leads ADD COLUMN IF NOT EXISTS telefono VARCHAR(50)').catch(() => {});
    
  } catch (err) {
    console.error('Error inicializando la base de datos:', err.stack);
  }
};

initDb();

export default pool;

import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// PostgreSQL Connection Pool configuration
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'krishiraksha_db',
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT || '5432', 10),
});

// Initialize database schema (Creates contacts table automatically if not exists)
export async function initDb() {
  const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      village VARCHAR(150) DEFAULT 'Satuluru Village, Guntur',
      role VARCHAR(50) DEFAULT 'Farmer',
      message TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      status VARCHAR(30) DEFAULT 'New'
    );

    CREATE TABLE IF NOT EXISTS volunteers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      contribution VARCHAR(150) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      status VARCHAR(30) DEFAULT 'Active'
    );
  `;

  try {
    const client = await pool.connect();
    await client.query(createTablesQuery);
    client.release();
    console.log('✅ PostgreSQL database connected & tables ready.');
  } catch (err) {
    console.error('❌ PostgreSQL connection error:', err.message);
  }
}

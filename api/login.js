import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Initialize tables if they don't exist
        await sql`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        
        await sql`
            CREATE TABLE IF NOT EXISTS high_scores (
                id SERIAL PRIMARY KEY,
                score INTEGER NOT NULL,
                player_name VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        const { name } = req.body;
        const existing = await sql`SELECT * FROM users WHERE LOWER(name) = LOWER(${name})`;
        
        if (existing.rows.length > 0) {
            res.json({ isNew: false, message: `Welcome back, ${name}!` });
        } else {
            await sql`INSERT INTO users (name) VALUES (${name})`;
            res.json({ isNew: true, message: `Welcome to GenLayer Word Scramble, ${name}!` });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error' });
    }
}
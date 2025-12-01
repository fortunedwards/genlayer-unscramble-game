const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3001;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'genlayer_game',
    password: 'postgres',
    port: 5432,
});

app.use(express.json());
app.use(express.static('.'));

// Initialize database
async function initDB() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS high_scores (
                id SERIAL PRIMARY KEY,
                score INTEGER NOT NULL,
                player_name VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Database initialized');
    } catch (err) {
        console.error('Database initialization error:', err);
    }
}

// Get high score
app.get('/api/highscore', async (req, res) => {
    try {
        const result = await pool.query('SELECT MAX(score) as high_score FROM high_scores');
        res.json({ highScore: result.rows[0].high_score || 0 });
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Save score
app.post('/api/score', async (req, res) => {
    try {
        const { score, playerName } = req.body;
        await pool.query('INSERT INTO high_scores (score, player_name) VALUES ($1, $2)', [score, playerName]);
        
        const result = await pool.query('SELECT MAX(score) as high_score FROM high_scores');
        res.json({ highScore: result.rows[0].high_score });
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Get leaderboard
app.get('/api/leaderboard', async (req, res) => {
    try {
        const result = await pool.query('SELECT player_name, SUM(score) as total_score, MAX(score) as best_score FROM high_scores GROUP BY player_name ORDER BY total_score DESC LIMIT 10');
        res.json({ leaderboard: result.rows });
    } catch (err) {
        console.error('Leaderboard error:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// User authentication
app.post('/api/login', async (req, res) => {
    try {
        const { name } = req.body;
        const existing = await pool.query('SELECT * FROM users WHERE LOWER(name) = LOWER($1)', [name]);
        
        if (existing.rows.length > 0) {
            res.json({ isNew: false, message: `Welcome back, ${name}!` });
        } else {
            await pool.query('INSERT INTO users (name) VALUES ($1)', [name]);
            res.json({ isNew: true, message: `Welcome to GenLayer Word Scramble, ${name}!` });
        }
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    initDB();
});
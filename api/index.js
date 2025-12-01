const express = require('express');
const path = require('path');
const { sql } = require('@vercel/postgres');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Initialize database
async function initDB() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS high_scores (
                id SERIAL PRIMARY KEY,
                score INTEGER NOT NULL,
                player_name VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await sql`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
    } catch (err) {
        console.error('Database initialization error:', err);
    }
}

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Get high score
app.get('/api/highscore', async (req, res) => {
    try {
        await initDB();
        const result = await sql`SELECT MAX(score) as high_score FROM high_scores`;
        res.json({ highScore: result[0]?.high_score || 0 });
    } catch (err) {
        console.error('High score error:', err);
        res.json({ highScore: 0 });
    }
});

// Save score
app.post('/api/score', async (req, res) => {
    try {
        await initDB();
        const { score, playerName } = req.body;
        await sql`INSERT INTO high_scores (score, player_name) VALUES (${score}, ${playerName})`;
        
        const result = await sql`SELECT MAX(score) as high_score FROM high_scores`;
        res.json({ highScore: result[0]?.high_score || 0 });
    } catch (err) {
        console.error('Save score error:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Get leaderboard
app.get('/api/leaderboard', async (req, res) => {
    try {
        await initDB();
        const result = await sql`
            SELECT player_name, SUM(score) as total_score, MAX(score) as best_score 
            FROM high_scores 
            GROUP BY player_name 
            ORDER BY total_score DESC 
            LIMIT 10
        `;
        res.json({ leaderboard: result });
    } catch (err) {
        console.error('Leaderboard error:', err);
        res.json({ leaderboard: [] });
    }
});

// User authentication
app.post('/api/login', async (req, res) => {
    try {
        await initDB();
        const { name } = req.body;
        const existing = await sql`SELECT * FROM users WHERE LOWER(name) = LOWER(${name})`;
        
        if (existing.length > 0) {
            res.json({ isNew: false, message: `Welcome back, ${name}!` });
        } else {
            await sql`INSERT INTO users (name) VALUES (${name})`;
            res.json({ isNew: true, message: `Welcome to GenLayer Word Scramble, ${name}!` });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = app;
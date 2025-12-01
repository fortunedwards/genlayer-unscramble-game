const express = require('express');
const path = require('path');

const app = express();

// In-memory storage for demo (replace with database in production)
let highScores = [];
let users = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Get high score
app.get('/api/highscore', (req, res) => {
    const highScore = highScores.length > 0 ? Math.max(...highScores.map(s => s.score)) : 0;
    res.json({ highScore });
});

// Save score
app.post('/api/score', (req, res) => {
    const { score, playerName } = req.body;
    highScores.push({ score, playerName, createdAt: new Date() });
    
    const highScore = Math.max(...highScores.map(s => s.score));
    res.json({ highScore });
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
    const playerStats = {};
    
    highScores.forEach(score => {
        if (!playerStats[score.playerName]) {
            playerStats[score.playerName] = { totalScore: 0, bestScore: 0 };
        }
        playerStats[score.playerName].totalScore += score.score;
        playerStats[score.playerName].bestScore = Math.max(playerStats[score.playerName].bestScore, score.score);
    });
    
    const leaderboard = Object.entries(playerStats)
        .map(([name, stats]) => ({
            player_name: name,
            total_score: stats.totalScore,
            best_score: stats.bestScore
        }))
        .sort((a, b) => b.total_score - a.total_score)
        .slice(0, 10);
    
    res.json({ leaderboard });
});

// User authentication
app.post('/api/login', (req, res) => {
    const { name } = req.body;
    const existing = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    
    if (existing) {
        res.json({ isNew: false, message: `Welcome back, ${name}!` });
    } else {
        users.push({ name, createdAt: new Date() });
        res.json({ isNew: true, message: `Welcome to GenLayer Word Scramble, ${name}!` });
    }
});

module.exports = app;
# GenLayer Word Scramble Game

Test your GenLayer knowledge by unscrambling jumbled letters to form blockchain-related terms. Each round features 10 words with 30 seconds per word.

## Game Features
- **62 GenLayer Terms**: Complete vocabulary covering technical concepts, community roles, and platform features
- **Round-Based Gameplay**: 10 words per round, 30 seconds each
- **Scoring System**: +10 points for correct answers, -5 points for hints
- **Three Strikes Rule**: Game ends after 3 misses
- **Performance Analysis**: Detailed round review with word definitions
- **Leaderboard**: Global rankings showing total and best scores
- **Hint System**: Get definitions with 5-second cooldown
- **Shuffle Feature**: Rearrange letters without penalty

## Live Demo
🎮 **Play Now**: [GenLayer Word Scramble](https://your-vercel-url.vercel.app)

## Deployment on Vercel

### 1. Fork/Clone Repository
```bash
git clone https://github.com/fortunedwards/genlayer-unscramble-game.git
cd genlayer-unscramble-game
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project" → Import from GitHub
3. Select this repository
4. Click "Deploy"

### 3. Add Database (Vercel Postgres)
1. In your Vercel project dashboard
2. Go to **Storage** tab
3. Click **Create Database** → **Postgres**
4. Vercel automatically configures environment variables

### 4. Redeploy
- Vercel will automatically redeploy with database integration
- Your leaderboard will now persist data permanently!

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Local Database (Optional)
For local development, you can use PostgreSQL:
1. Install PostgreSQL
2. Create database `genlayer_game`
3. Set `DATABASE_URL` in `.env`

### 3. Run Locally
```bash
npm start
```

## How to Play
1. Enter your name and click "Start Game"
2. Unscramble the displayed letters to form GenLayer terms
3. Use "Hint" for definitions (-5 points)
4. Use "Shuffle" to rearrange letters (free)
5. Use "New Word" to skip difficult words (counts as miss)
6. Complete 10 words or reach 3 misses to end the round
7. Review performance and compete on the leaderboard!

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: Vercel Postgres
- **Deployment**: Vercel

## Database Schema
- `users`: Player authentication and welcome messages
- `high_scores`: All game scores with player names for leaderboard
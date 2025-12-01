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

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. PostgreSQL Setup
1. Install PostgreSQL on your system
2. Create a database named `genlayer_game`
3. Update database credentials in `server.js`:
   - `user`: your PostgreSQL username
   - `password`: your PostgreSQL password
   - `host`: usually 'localhost'
   - `port`: usually 5432

### 3. Run the Game
```bash
npm start
```

The game will be available at `http://localhost:3001`

### 4. Development Mode (Optional)
```bash
npm run dev
```

## How to Play
1. Enter your name and click "Start Game"
2. Unscramble the displayed letters to form GenLayer terms
3. Use "Hint" for definitions (-5 points)
4. Use "Shuffle" to rearrange letters (free)
5. Use "New Word" to skip difficult words (counts as miss)
6. Complete 10 words or reach 3 misses to end the round
7. Review performance and compete on the leaderboard!

## Database Schema
- `users`: Player authentication and welcome messages
- `high_scores`: All game scores with player names for leaderboard
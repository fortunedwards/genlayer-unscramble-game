import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { score, playerName } = req.body;
        await sql`INSERT INTO high_scores (score, player_name) VALUES (${score}, ${playerName})`;
        
        const result = await sql`SELECT MAX(score) as high_score FROM high_scores`;
        res.json({ highScore: result.rows[0].high_score });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error' });
    }
}
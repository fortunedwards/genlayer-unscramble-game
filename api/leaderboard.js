import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const result = await sql`
            SELECT player_name, SUM(score) as total_score, MAX(score) as best_score 
            FROM high_scores 
            GROUP BY player_name 
            ORDER BY total_score DESC 
            LIMIT 10
        `;
        res.json({ leaderboard: result.rows });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error' });
    }
}
import * as express from 'express';
import { pool } from '../db';

const router = express.Router();

router.post('/', async (req, res) => {
  const { sender_name, email, message } = req.body;

  try {
    await pool.query(
      `CALL insert_contact_message($1::text, $2::text, $3::text)`,
      [sender_name, email, message]
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error calling procedure:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

export default router;

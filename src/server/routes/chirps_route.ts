import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const chirps = await db.chirps_db.getAll();
        res.json(chirps);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error', error });
    }
});

export default router;
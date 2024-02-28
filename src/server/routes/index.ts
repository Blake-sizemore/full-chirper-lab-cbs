import { Router } from 'express';
import chirpsRouter from './chirps_route';

const router = Router();

router.use('/chirps',chirpsRouter);

export default router;
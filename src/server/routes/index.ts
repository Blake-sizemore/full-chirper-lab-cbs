import { Router } from 'express';
import chirpsRouter from './chirps_route';
import mentionsRouter from './mentions_route';

const router = Router();

router.use('/chirps',chirpsRouter);
router.use('/mentions',mentionsRouter);

export default router;
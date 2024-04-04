import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const chirps = await db.chirps_db.getOne(id);
        res.json(chirps);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error test', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await db.chirps_db.deleteOne(id);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error on delete', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const chirps = await db.chirps_db.getAll();
        res.json(chirps);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error get.getAll', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const newAdd = req.body;
        const fixedUser = newAdd.user_id = 1;
        // Not sure if the above const is a workable solution but it got processed correctly in my post
        const result = await db.chirps_db.addChirp(fixedUser,newAdd.message,newAdd.city);
        res.json({message: 'Chirp created and sent', id: result.insertId});
    } catch (error) {
        const newChirp = req.body
        console.log(error, newChirp);
        res.status(500).json({ message: 'internal server error post.add', error });
    }
});

router.put('/:id', async (req, res) => {
try {
    const edit = req.body;
    const id = parseInt(req.params.id);
    const result = await db.chirps_db.edit(edit.message,id);
    res.json({message: `Chirp ${id} edit`, id: result});
} catch (error) {
    const newChirp = req.body
        console.log(error, newChirp);
        res.status(500).json({ message: 'internal server error post.add', error });
}
});

export default router;
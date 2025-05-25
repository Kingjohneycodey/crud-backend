import express from 'express';

import { create, getAll, getOne, update, remove } from '../controllers/task.controller';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

router.use(authenticate);

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOne);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;

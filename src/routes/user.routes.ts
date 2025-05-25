import express from 'express';
import { register, login, getUsers } from '../controllers/user.controller';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', getUsers);

export default router;

import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user.controller';

const router = Router();

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user/create', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);



export default router;
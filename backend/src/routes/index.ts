import { Router } from 'express';
import userRoutes from './user-routes.js';
import chatRoutes from './chat-routes.js';

const router = Router();

router.use('/user', userRoutes); //domain/api/v1
router.use('/chats', chatRoutes); //domain/api/v1

export default router;

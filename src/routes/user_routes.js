import express from 'express';
import userController from '../controllers.js/user_controllers.js';
const userRouter = express.Router();
userRouter.get('/get-user', userController.getUser);
userRouter.post('/create-user', userController.createUser);
export default userRouter;

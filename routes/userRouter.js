import { Router } from "express";
import userController from "../controllers/userController.js";


const userRouter = Router();

userRouter.post('/', userController.createUser)
userRouter.get('/', userController.allUsers)


export default userRouter;
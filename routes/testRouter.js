import { Router } from "express";
import testController from "../controllers/testController.js";

const testRouter = Router();

testRouter.get('/', testController.test1);
testRouter.get('/2', testController.test2);
testRouter.post('/create', testController.create);


export default testRouter;
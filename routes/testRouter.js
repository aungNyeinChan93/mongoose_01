import { Router } from "express";
import testController from "../controllers/testController.js";

const testRouter = Router();

testRouter.get('/', testController.test1);
testRouter.get('/2', testController.test2);
testRouter.post('/create', testController.create);
testRouter.get('/all', testController.getAll);
testRouter.get('/:id', testController.getTest);
testRouter.put('/:id', testController.modifyName);
testRouter.delete('/:id', testController.destroyTest);


export default testRouter;
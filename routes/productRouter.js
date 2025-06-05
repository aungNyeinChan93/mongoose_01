import { Router } from 'express'
import productController from '../controllers/productController.js';

const productRouter = Router();


productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProduct);
productRouter.put('/:id', productController.modifyProduct);
productRouter.delete('/:id', productController.dropProduct);


export default productRouter;
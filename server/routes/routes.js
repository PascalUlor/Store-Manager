import express from 'express';
import inventoryController from '../controllers/inventory';

const router = express.Router();


router.route('/products')
  .get(inventoryController.getAllProducts)
  .post(inventoryController.createProduct);


export default router;

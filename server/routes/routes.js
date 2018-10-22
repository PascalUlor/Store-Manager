import express from 'express';
import inventoryController from '../controllers/inventory';

const router = express.Router();


router.route('/products')
  .get(inventoryController.getAllProducts)
  .post(inventoryController.createProduct);

router.route('/sales')
  // .get(inventoryController.getAllProducts)
  .post(inventoryController.createSales);


export default router;

import express from 'express';
import inventoryController from '../controllers/inventory';

const router = express.Router();


router.route('/products')
  .post(inventoryController.createProduct);


export default router;

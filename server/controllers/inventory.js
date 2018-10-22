import db from '../models/testData';

/**
 * Class for /api/routes
 * @class inventoryController
 */
export default class inventoryController {
  /**
     * API method to (POST) add a product
     * @param {obj} req
     * @param {obj} res
     * @returns {obj} insertion error messages or success messages
     */
  static createProduct(req, res) {
    if (parseInt(req.body.userId, 10) === db.userDataBase[0].id) {
      db.inventory.push({
        id: db.inventory.length + 1,
        userId: parseInt(req.body.userId, 10),
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        description: req.body.description,
        status: req.body.status,
        dateAdded: req.body.dateAdded,
      });
      res.status(201);
      res.json({
        success: true,
        message: 'Request created successfully',
        data: db.inventory[db.inventory.length - 1],
      });
    } else {
      res.status(400);
      res.json({
        success: false,
        message: 'You are not authorized to create products',
      });
    }
  }// Method to create products ends

  /**
 * API method GET all products in the inventory
 * @param {obj} req
 * @param {obj} res
 * @returns {obj} success message
 */
  static getAllProducts(req, res) {
    if (db.inventory.length !== 0) {
      if (!req.query.sort) {
        res.status(200);
        res.json({
          success: true,
          message: 'Successfully Retrieved inventory',
          data: db.inventory,
        });
      }
    } else {
      res.status(404);
      res.json({
        success: false,
        message: 'No product in the inventory',
      });
    }
  }

  /**
     * API method to (POST) add a product
     * @param {obj} req
     * @param {obj} res
     * @returns {obj} insertion error messages or success messages
     */
  static createSales(req, res) {
    if (parseInt(req.body.userId, 10) === db.userDataBase[0].id) {
      res.status(400);
      res.json({
        success: false,
        message: 'You are not authorized to create sales',
      });
    } else {
      db.salesRecord.push({
        id: db.salesRecord.length + 1,
        userId: parseInt(req.body.userId, 10),
        productName: req.body.productName,
        productNo: req.body.productNo,
        dateSold: req.body.dateSold,
        quantity: req.body.quantity,
        price: req.body.price,
      });
      res.status(201);
      res.json({
        success: true,
        message: 'Request created successfully',
        data: db.salesRecord[db.salesRecord.length - 1],
      });
    }
  }//
}

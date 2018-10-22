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
}

import express from 'express';
import shipmentController from '../controllers/shipment.controller.js'
import { tokenMiddleware } from '../middleware/token.middleware.js';

const router = express.Router();

router.get('/ping', shipmentController.ping);

router.post('/',tokenMiddleware, shipmentController.createShipment);


export default router
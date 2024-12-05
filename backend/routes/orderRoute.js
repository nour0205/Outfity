import express from "express";
import adminAuth from '../middleware/adminAuth.js'
import {
  placeOrder,
  placeOrderStripe,
  palceOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//Payment
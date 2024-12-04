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
orderRouter.post('/list',adminAuth, allOrders)
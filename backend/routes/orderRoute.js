import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import {
  placeOrder,
  placeOrderVisa,
  palceOrderPaypal,
  allOrders,
  userOrders,
  updateStatus,
  deleteItem,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/visa", authUser, placeOrderVisa);
orderRouter.post("/paypal", authUser, palceOrderPaypal);

orderRouter.get("/userorders", authUser, userOrders);
orderRouter.delete("/:id", authUser, deleteItem);

export default orderRouter;

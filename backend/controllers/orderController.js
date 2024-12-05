import orderModel from "../models/orderModel.js";

// PLACING ORDERS USING COD METHOD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: "false",
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save()
    

  } catch (error) {}
};

// PLACING ORDERS USING STRIPE METHOD
const placeOrderStripe = async (req, res) => {};

// PLACING ORDERS USING RAZORPAY METHOD
const palceOrderRazorpay = async (req, res) => {};

// ALL ORDERS DATA FOR ADMIN PANEL
const allOrders = async (req, res) => {};

// USER ORDER DATA FOR FRONTEND
const userOrders = async (req, res) => {};

// UPDATE STATUS ORDER FOR ADMIN PANEL
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  palceOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};

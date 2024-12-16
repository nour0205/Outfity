import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

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
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// PLACING ORDERS USING STRIPE METHOD
const placeOrderVisa = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Visa",
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed with Visa" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// PLACING ORDERS USING RAZORPAY METHOD
const palceOrderPaypal = async (req, res) => {try {
  const { userId, items, amount, address } = req.body;

  const orderData = {
    userId,
    items,
    address,
    amount,
    paymentMethod: "Paypal",
    date: Date.now(),
  };

  const newOrder = new orderModel(orderData);
  await newOrder.save();

  await userModel.findByIdAndUpdate(userId, { cartData: {} });

  res.json({ success: true, message: "Order Placed with Paypal" });
} catch (error) {
  console.log(error);
  res.json({ success: false, message: error.message });
}
};

// ALL ORDERS DATA FOR ADMIN PANEL
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// USER ORDER DATA FOR FRONTEND
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// UPDATE STATUS ORDER FOR ADMIN PANEL
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderVisa,
  palceOrderPaypal,
  allOrders,
  userOrders,
  updateStatus,
};

const Order = require("../models/ordersModel");

exports.getOrders = (req, res) => {
  Order.fetchOrders()
    .then(([orders, fieldData]) => {
      res.send(orders);
    })
    .catch((error) => {
      res.send(error);
    });
};

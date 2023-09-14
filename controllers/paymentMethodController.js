const PaymentMethod = require("../models/paymentMethodModel");

exports.getAllPaymentMethods = (req, res) => {
  PaymentMethod.fetchPaymentMethods()
    .then(([paymentMethods, fieldData]) => {
      res.send(paymentMethods);
    })
    .catch((error) => {
      res.send(error);
    });
};

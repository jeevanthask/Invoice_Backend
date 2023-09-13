const Invoice = require("../models/invoiceModel");

exports.getInvoices = (req, res) => {
  Invoice.fetchAllInvoices()
    .then(([invoices, filedData]) => {
      res.send(invoices);
    })
    .catch((error) => {
      res.send(error);
    });
};

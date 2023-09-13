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

exports.getClientInfo = (req, res) => {
  Invoice.fetchClientData(req.body.invoice_id)
    .then(([clientInfo, filedData]) => {
      res.send(clientInfo);
    })
    .catch((error) => {
      res.send(error);
    });
};

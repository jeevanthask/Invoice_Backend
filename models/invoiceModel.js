const db = require("../util/database");

class Invoice {
  constructor(
    invoice_id,
    number,
    client_id,
    invoice_total,
    payment_total,
    invoice_date,
    due_date,
    payment_date
  ) {
    this.invoice_id = invoice_id;
    this.number = number;
    this.client_id - client_id;
    this.invoice_total = invoice_total;
    this.payment_total = payment_total;
    this.invoice_date = invoice_date;
    this.due_date = due_date;
    this.payment_date = payment_date;
  }

  static fetchAllInvoices() {
    return db.execute("SELECT * FROM invoices");
  }
}

module.exports = Invoice;

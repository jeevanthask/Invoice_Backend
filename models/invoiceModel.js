const invoice_db = require("../util/invoice_database");

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
    return invoice_db.execute("SELECT * FROM invoices");
  }

  static fetchClientData(invoice_id) {
    return invoice_db.execute(
      `SELECT * FROM clients WHERE client_id = (SELECT client_id FROM invoices WHERE invoice_id = ${invoice_id})`
    );
  }
}

module.exports = Invoice;

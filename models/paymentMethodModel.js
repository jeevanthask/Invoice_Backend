const db = require("../util/database");

class PaymentMethod {
  constructor(payment_method_id, name) {
    this.payment_method_id = payment_method_id;
    this.name = name;
  }

  static fetchPaymentMethods() {
    return db.execute("SELECT * FROM payment_methods");
  }
}

module.exports = PaymentMethod;

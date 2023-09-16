const store_db = require("../util/store_database");

class Orders {
  constructor(
    order_id,
    customer_id,
    order_date,
    status,
    comments,
    shipped_date,
    shipper_id
  ) {
    this.order_id = order_id;
    this.customer_id = customer_id;
    this.order_date = order_date;
    this.status = status;
    this.comments = comments;
    this.shipped_date = shipped_date;
    this.shipper_id = shipper_id;
  }

  static fetchOrders() {
    return store_db.execute(
      `SELECT 
        orders.order_id,
        CONCAT_WS(' ',customers.first_name,customers.last_name) AS fullName,
        orders.order_date,
        orders.status,
        orders.comments,
        orders.shipped_date,
        shippers.name AS shipper_name
      FROM orders
       INNER JOIN customers ON
        orders.customer_id = customers.customer_id 
       INNER JOIN shippers ON 
        orders.shipper_id = shippers.shipper_id`
    );
  }
}

module.exports = Orders;

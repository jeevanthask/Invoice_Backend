const invoice_db = require("../util/invoice_database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  saveUser() {
    return bcrypt.hash(this.password, saltRounds).then((hash) => {
      return invoice_db.execute(
        "INSERT INTO users(username,email,password) VALUES(?,?,?)",
        [this.username, this.email, hash]
      );
    });
  }

  static getUser(username) {
    return invoice_db.execute(
      `SELECT * FROM users WHERE username = '${username}'`
    );
  }
}

module.exports = User;

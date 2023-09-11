const db = require("../util/database");

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  saveUser() {
    return db.execute(
      "INSERT INTO users(username,email,password) VALUES(?,?,?)",
      [this.username, this.email, this.password]
    );
  }
}

module.exports = User;

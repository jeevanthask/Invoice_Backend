const db = require("../util/database");

class Auth {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  handleLogin() {
    return {
      username: this.username,
      password: this.password,
    };
  }
}

module.exports = Auth;

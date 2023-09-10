const Auth = require("../models/authModel");

exports.postLogin = (req, res) => {
  const auth = new Auth(req.body.username, req.body.password);
  const authDetails = auth.handleLogin();

  res.send(authDetails);
};

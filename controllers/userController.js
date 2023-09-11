const User = require("../models/userModel");

exports.addUser = (req, res) => {
  const user = new User(req.body.username, req.body.email, req.body.password);
  user
    .saveUser()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

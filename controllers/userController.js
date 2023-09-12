const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.addUser = (req, res) => {
  const user = new User(req.body.username, req.body.email, req.body.password);
  user
    .saveUser()
    .then((result) => {
      const token = jwt.sign({ username: req.body.username }, "nandikasecret");
      res.header("x-auth-token", token).send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.logUser = (req, res) => {
  const user = User.getUser(req.body.username);
  user
    .then((result) => {
      bcrypt
        .compare(req.body.password, result[0][0].password)
        .then((result) => {
          if (result) {
            const token = jwt.sign(
              { username: req.body.username },
              "nandikasecret"
            );
            res.send(token);
          } else {
            res.send("Unauthorized user");
          }
        });
    })
    .catch((error) => {
      res.send(error);
    });
};

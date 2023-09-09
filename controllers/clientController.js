const Client = require("../models/clientModel");

exports.getAllClients = (req, res, next) => {
  Client.fetchAllClients()
    .then(([rows, filedData]) => {
      res.send(rows);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.getOneClient = (req, res) => {
  Client.fetchOneClient(req.params.id)
    .then(([rows, filedData]) => {
      res.send(rows);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.editClient = (req, res) => {
  Client.updateClient(
    req.params.id,
    req.body.name,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.phone
  )
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.postClient = (req, res) => {
  const client = new Client(
    req.body.client_id,
    req.body.name,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.phone
  );

  client
    .saveClient()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

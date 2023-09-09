import React, { useEffect, useState } from "react";
import axios from "axios";

interface IClient {
  address: string;
  city: string;
  client_id: number;
  name: string;
  phone: string;
  state: string;
}

function Clients() {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("clients ", clients);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Clients Component</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr>
                  <th scope="row">{client.client_id}</th>
                  <td>{client.name}</td>
                  <td>{client.address}</td>
                  <td>{client.city}</td>
                  <td>{client.state}</td>
                  <td>{client.phone}</td>
                  <td>
                    <button className="btn btn-primary mx-2">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Clients;

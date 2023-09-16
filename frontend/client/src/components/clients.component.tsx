import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Clients Component</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <DataTable
              value={clients}
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                field="client_id"
                header="ClientId"
                style={{ width: "10%" }}
              ></Column>
              <Column
                field="name"
                header="Name"
                style={{ width: "15%" }}
              ></Column>
              <Column
                field="address"
                header="Address"
                style={{ width: "15%" }}
              ></Column>
              <Column
                field="city"
                header="City"
                style={{ width: "15%" }}
              ></Column>
              <Column
                field="state"
                header="State"
                style={{ width: "15%" }}
              ></Column>
              <Column
                field="phone"
                header="Phone"
                style={{ width: "15%" }}
              ></Column>
              <Column
                field="action"
                header="Action"
                style={{ width: "15%" }}
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;

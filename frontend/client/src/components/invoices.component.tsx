import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface IInvoice {
  invoice_id: number;
  number: string;
  client_id: number;
  invoice_total: number;
  payment_total: number;
  invoice_date: string;
  due_date: string;
  payment_date: string;
}

interface IClientInfo {
  client_id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
}

function Invoices() {
  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/invoices")
      .then((response) => {
        setInvoices(response.data);
        setSpinner(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (spinner) {
    return (
      <div>
        <i className="pi pi-spin pi-spinner" style={{ fontSize: "2rem" }}></i>
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <DataTable
              value={invoices}
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column field="invoice_id" header="InvoiceId"></Column>
              <Column field="number" header="Number"></Column>
              <Column field="client_id" header="ClientId"></Column>
              <Column field="invoice_total" header="Invoice Total"></Column>
              <Column field="payment_total" header="Payment Total"></Column>
              <Column field="invoice_date" header="Invoice Date"></Column>
              <Column field="due_date" header="Due Date"></Column>
              <Column field="payment_date" header="Payment Date"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;

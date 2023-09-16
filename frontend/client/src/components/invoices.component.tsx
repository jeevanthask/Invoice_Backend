import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";

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
  const [invoiceId, setInvoiceId] = useState("");
  const [show, setShow] = useState(false);
  const [clientInfo, setClientInfo] = useState<IClientInfo[]>([]);

  const handleClose = () => setShow(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/invoices/clientInfo", {
        invoice_id: invoiceId,
      })
      .then((result) => {
        console.log(result.data);
        setClientInfo(result.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setShow(true);
  };

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
        <div className="spinner-grow text-success" role="status"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-12">
          <form>
            <div className="mb-3">
              <label className="form-label">Invoice Id</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setInvoiceId(event.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Number</th>
                <th scope="col">Client_Id</th>
                <th scope="col">Invoice Total</th>
                <th scope="col">Payment Total</th>
                <th scope="col">Invoice Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">Payment Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.invoice_id}>
                  <th scope="row">{invoice.invoice_id}</th>
                  <th scope="row">{invoice.number}</th>
                  <td>{invoice.client_id}</td>
                  <td>{invoice.invoice_total}</td>
                  <td>{invoice.payment_total}</td>
                  <td>{invoice.invoice_date}</td>
                  <td>{invoice.due_date}</td>
                  <td>{invoice.payment_date}</td>
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

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Client Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr key={clientInfo[0]?.client_id}>
                <th scope="row">{clientInfo[0]?.client_id}</th>
                <th scope="row">{clientInfo[0]?.name}</th>
                <th scope="row">{clientInfo[0]?.address}</th>
                <td>{clientInfo[0]?.city}</td>
                <td>{clientInfo[0]?.state}</td>
                <td>{clientInfo[0]?.phone}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default Invoices;

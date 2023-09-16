import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface IPaymentMethods {
  payment_method_id: number;
  name: string;
}

function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<IPaymentMethods[]>([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/paymentMethods")
      .then((methods) => {
        setPaymentMethods(methods.data);
        setSpinner(false);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
              value={paymentMethods}
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column field="payment_method_id" header="Id"></Column>
              <Column field="name" header="Method"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;

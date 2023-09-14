import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div className="spinner-grow text-success" role="status"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentMethods.map((method) => (
                <tr key={method.payment_method_id}>
                  <th scope="row">{method.payment_method_id}</th>
                  <td>{method.name}</td>
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

export default PaymentMethods;

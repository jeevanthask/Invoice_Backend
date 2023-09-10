import React, { FormEvent, useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(user);

    axios
      .post("http://localhost:3000/api/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row m-5">
      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) =>
                setUser({ ...user, username: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

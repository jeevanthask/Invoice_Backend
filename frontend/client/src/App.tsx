import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/homepage">
            Home
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage/clients">
                  Clients
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage/invoices">
                  Invoices
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage/payment-methods">
                  Payment Methods
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage/payments">
                  Payments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-12">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "primereact/button";

function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="home">
            <h1>Welcome to Our Beautiful Home Page</h1>
            <p>Discover the beauty and elegance of our website.</p>
            <Button label="Check" icon="pi pi-check" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

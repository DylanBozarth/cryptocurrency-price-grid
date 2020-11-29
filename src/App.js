import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-enterprise";
import "./App.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Grid from "./grid";

const App = () => {
  return (
    <div className="body">
      <div className="container-fluid">
        <h1 className="text-center">Latest prices for Cryptocurrency exchange </h1>
      </div>
      <div className="container-fluid">
        <Grid />{" "}
      </div>
    </div>
  );
};

export default App;

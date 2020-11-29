import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import "./App.css";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);
  
    useEffect(() => {
      fetch("https://api.coingecko.com/api/v3/exchange_rates")
        .then((result) => result.json())
        .then((rowData) => {
          let rates = rowData.rates;
          let newRowData = Object.values(rates);
          setRowData(newRowData);
          console.log(newRowData);
        });
    }, []);
  
    return (
      <div className="container-fluid">
        <div
          className="ag-theme-alpine-dark container "
          style={{ width: "700px", height: "400px" }}
        >
          <AgGridReact rowSelection="multiple" rowData={rowData}>
            <AgGridColumn
              field="name"
              filter={true}
              checkboxSelection={true}
              sortable={true}
            ></AgGridColumn>
            <AgGridColumn
              field="unit"
              filter={true}
              checkboxSelection={true}
              sortable={true}
            ></AgGridColumn>
            <AgGridColumn
              field="value"
              filter={true}
              checkboxSelection={true}
              sortable={true}
            ></AgGridColumn>
            
          </AgGridReact>
        </div>
      </div>
    );
  };
  
  export default App;
  
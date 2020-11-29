import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


export const Grid = () => {
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
        
          <div
            className="ag-theme-alpine-dark container-fluid grid"
          >
            <AgGridReact rowSelection="multiple" className="container-fluid" rowData={rowData}>
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
              <AgGridColumn
                field="type"
                filter={true}
                checkboxSelection={true}
                sortable={true}
              ></AgGridColumn>
            </AgGridReact>
          </div>
        
      );
    }
export default Grid
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
    // https://blockchain.info/ticker
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
            console.log(rowData)
         }, []);

    return (
        <div className="container-fluid">
        <div className="ag-theme-alpine-dark container " style={{width: '700px', height: '400px' }} >
            <AgGridReact
            rowSelection="multiple"
                rowData={rowData}>
                <AgGridColumn field="name"  filter={true} checkboxSelection={true} sortable={true}></AgGridColumn>
                <AgGridColumn field="phone" filter={true} checkboxSelection={true} sortable={true}></AgGridColumn>
                <AgGridColumn field="email" filter={true} checkboxSelection={true} sortable={true}></AgGridColumn>
            </AgGridReact>
        </div></div>
    );
};

export default App;
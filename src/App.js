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
            fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
         }, []);

    return (
        <div className="ag-theme-alpine-dark container " style={ { height: 400, width: 600 } }>
            <AgGridReact
            rowSelection="multiple"
                rowData={rowData}>
                <AgGridColumn field="make"  filter={true} checkboxSelection={true} sortable={true}></AgGridColumn>
                <AgGridColumn field="model" filter={true} checkboxSelection={true} sortable={true}></AgGridColumn>
                <AgGridColumn field="price" filter={true} checkboxSelection={true} sortable={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default App;
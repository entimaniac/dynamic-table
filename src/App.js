import React from 'react';
import './App.css';
import Table from "./Components/Table";
import TableContainer from "./Components/TableContainer";

const App = () => {

    const data = [
        {
            id: 1,
            name: "name1",
            description: "description1",
            boolean: true,
            list: [11, 12, 13],
            nullField: null,
            objectField: {
                subfield1: 1,
                subfield2: 2,
            }
        }, {
            id: 2,
            name: "name2",
            description: "description2",
            boolean: false,
            list: [21, 22, 23],
            nullField: null,
            objectField: {
                subfield1: 1,
                subfield2: 2,
            }
        }
    ];

    return (
        <div className="App">
            <header className="App-header">
                <TableContainer data={data}/>
            </header>
        </div>
    );
}

export default App;

import React from 'react';
import '../App.css';
import TableDetail from "./TableDetail";

const TableRow = (props) => {

    return (
        <tr>
            {props.data.map((data, i) => {
                return <TableDetail key={i} data={data}></TableDetail>
            })}
        </tr>
    );
}

export default TableRow;

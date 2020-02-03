import React from 'react';
import '../App.css';

const TableRow = (props) => {

    return (
        <tr>
            {props.data.map((data, i) => {
                return <th key={i}>
                    {data}
                </th>
            })}
        </tr>
    );
}

export default TableRow;

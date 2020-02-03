import React from 'react';
import '../App.css';
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const Table = (props) => {
    function getHeaders() {
        return Object.keys(props.data[0]).map(i => i.toUpperCase());
    };

    function getData() {
        let fields = [];
        for (let i of props.data) {
            fields.push(Object.values(i))
        }
        return fields;
    };

    return (
        <div className={"table-div"}>
            <table>
                <tbody>
                <TableHeader data={getHeaders()}></TableHeader>
                {getData().map((data, i) => {
                    return <TableRow data={data} key={i}>
                    </TableRow>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

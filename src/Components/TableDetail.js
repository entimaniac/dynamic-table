import React from 'react';
import '../App.css';
import Table from "./Table";

const TableDetail = (props) => {

    function getData() {
        let data = props.data;
        if (checkIfObject(data)) {
            // let button = <button>expand</button>
            // return button;
            return [<Table data={[data]}/>];
        } else {
            return String(data);
        }
    }

    function checkIfObject(obj) {
        if (obj === null) return false;
        if (props.data instanceof Array) return false;
        if (typeof props.data === 'object') return true;
        return false;
    }

    return (
        <td>
            {getData()}
        </td>
    );
};

export default TableDetail;

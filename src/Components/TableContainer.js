import React, {useState} from 'react';
import '../App.css';
import Table from "./Table";
import TableRow from "./TableRow";

const TableContainer = (props) => {
    // const [subTables, setSubTables] = useState([{a: "a"}]);
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }, {text:"somet stuff"}]);

    return (
        <div className={"table-div"}>
            <Table data={props.data}/>
            {todos.map((data, i) => {
                return "something";
                // return <TableRow data={data} key={i}>
                // </TableRow>
            })}
        </div>
    );
}

export default TableContainer;

import React from 'react';
// import { useState } from 'react';
import Button from '@mui/material/Button';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import Edit from '@mui/icons-material/Edit';

const Output = (props) => {
    // const [line, setLine] = useState(false);

    return (
        <>
            <div className="output">
                <ol>
                    {props.Items.map((item) => {
                        //To delete the completed task
                        return (
                            <div key={item.id} className="list">
                                <Button className="btn2" onClick={() => { props.onSelect(item.id) }}> <RemoveCircle /></Button>
                                <Button className="btn2" onClick={() => { props.onSelect2(item.id) }}> <Edit /></Button>
                                <li> {item.name} </li>
                            </div>)

                        {/* //To Cross the Completed Task
                        return (
                            <div className="list">
                                <Button className="btn2" onClick={() => { setLine(true) }}> <DeleteIcon /> </Button>
                                <li style={{ textDecoration: line ? "line-through" : "none" }}> {itemvalue} </li>
                            </div>
                        ) */}
                    })}
                </ol>
            </div>
        </>
    )
}

export default Output

import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Edit from '@mui/icons-material/Edit';

const Input = (props) => {
    return (
        <>
            <div className="input">
                <input type="text" className="add_item" placeholder="Add to list" value={props.value} onChange={props.onChange} />

                {props.isToggle ? <Button className="btn" onClick={props.onClick}> <Edit /></Button> :
                    <Button variant="contained" className="btn" onClick={props.onClick}><AddIcon /></Button>  }
                
            </div>
        </>
    )
}

export default Input

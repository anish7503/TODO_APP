import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteAll = (props) => {
    return (
        <div>
            <Button className="btn3" onClick={ props.onSelect }>
                <DeleteIcon /> Delete All
            </Button>
        </div>
    )
}

export default DeleteAll;

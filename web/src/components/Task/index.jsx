import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edit } from '../../redux/actions';

import { MdEdit } from 'react-icons/md'

const Task = ({ index, task, handleEditTask}) => {

    const [onEdit, setOnEdit] = useState(false);
    const [newInputValue, setNewInputValue] = useState('');

    const dispatch = useDispatch();

    const landingReducer = useSelector(state => state.landingTodos);

    function handleBlur () {
        setOnEdit(false)
        dispatch(edit('Landing', index, newInputValue))
    }

    return (
        onEdit 
            ? 
        <div>
            <input defaultValue={task} 
                onBlur={handleBlur } 
                onChange={(e) => setNewInputValue(e.target.value)}
            /> 
        </div>
            :
        <div>
            <p onDoubleClick={() => setOnEdit(true)}>
                {task}
            </p>
            <MdEdit />
        </div>
    )        
    
}

export default Task;
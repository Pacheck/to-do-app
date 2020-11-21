import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edit, del } from '../../redux/actions';

import './index.css'

import { MdEdit } from 'react-icons/md'
import { ImCheckmark2 } from 'react-icons/im'
import { AiOutlineDelete } from 'react-icons/ai'

const Task = ({ reducerType, index, task }) => {

    const [onEdit, setOnEdit] = useState(false);
    const [newInputValue, setNewInputValue] = useState('');

    const dispatch = useDispatch();

    const landingReducer = useSelector(state => state.landingTodos);

    function handleBlur () {
        setOnEdit(false)
        dispatch(edit(reducerType, index, newInputValue))
        console.log({ type: 'dispatch/edit', value: newInputValue})
    }

    return (
        onEdit 
            ? 
        <div>
            <input 
                autoFocus
                defaultValue={task}    
                onChange={(e) => setNewInputValue(e.target.value)}
                onBlur={handleBlur}
            /> 
            <ImCheckmark2 onClick={handleBlur}/>
        </div>
            :
        <div>
            <p>
                {task}
            </p>
            <MdEdit onClick={() => setOnEdit(true)} />
            <AiOutlineDelete onClick={() => { dispatch(del(reducerType, index)) }}/>
        </div>
    )        
    
}

export default Task;
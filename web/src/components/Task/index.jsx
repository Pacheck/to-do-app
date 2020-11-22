import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit, del, finish } from '../../redux/actions';

import './index.css'

import { MdEdit } from 'react-icons/md'
import { ImCheckmark2 } from 'react-icons/im'
import { AiOutlineDelete } from 'react-icons/ai'

const Task = ({ reducerType, index, task }) => {

    const [onEdit, setOnEdit] = useState(false);
    const [newInputValue, setNewInputValue] = useState('');

    const dispatch = useDispatch();

    function handleBlur () {
        setOnEdit(false)
        dispatch(edit(reducerType, index, newInputValue))
        console.log({ type: 'dispatch/edit', value: newInputValue})
    }

    const handleFinishTask = () => {
        dispatch(finish('Finished', reducerType, task))
        dispatch(del(reducerType, index));
        console.log({ type: 'dispatch/finish', value: task})
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
        <div className="task">
            <input type="checkbox" defaultValue={task} placeholder={task} onClick={handleFinishTask}/>
            <h3>{task}</h3>
            <div className="task-actions">
                <MdEdit onClick={() => setOnEdit(true)} />
                <AiOutlineDelete onClick={() => { dispatch(del(reducerType, index)) }}/>
            </div>
        </div>
    )        
    
}

export default Task;
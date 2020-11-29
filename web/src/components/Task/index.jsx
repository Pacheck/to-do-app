import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit, del, finish } from '../../redux/actions';

import './index.css'

import { MdEdit } from 'react-icons/md'
import { ImCheckmark2 } from 'react-icons/im'
import { AiOutlineDelete } from 'react-icons/ai'

const Task = ({ reducerType, task }) => {

    const [onEdit, setOnEdit] = useState(false);
    const [newInputValue, setNewInputValue] = useState('');

    const dispatch = useDispatch();

    const { id, categoryTask, text } = task;

    const handleFinishTask = () => {
        const payload = {
            id, // id
            text, // text
            categoryTask, //categoryTask
        }

        dispatch(finish('Finished', payload));

        handleDeleteTask();

        console.log({ type: 'dispatch/finish', value: task})
    }

    const handleEditTask = () => {
        setOnEdit(false)
        const payload = {
            ...task,
            text: newInputValue
        }
        dispatch(edit(reducerType, payload))
        console.log({ type: 'dispatch/edit', value: newInputValue})
    }

    const handleDeleteTask = () => {
        dispatch(del(reducerType, id));
    }

    return (
        onEdit 
            ? 
        <div>
            <input 
                autoFocus
                defaultValue={task.text}    
                onChange={(e) => setNewInputValue(e.target.value)}
                onBlur={handleEditTask}
            /> 
            <ImCheckmark2 onClick={handleEditTask}/>
        </div>
            :
        <div className="task">
            <input type="checkbox" onClick={handleFinishTask} />
            <h3>{task.text}</h3>
            <div className="task-actions">
                <MdEdit onClick={() => setOnEdit(true)} />
                <AiOutlineDelete onClick={handleDeleteTask}/>
            </div>
        </div>
    )        

}

export default Task;
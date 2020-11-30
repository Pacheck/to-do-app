import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MdEdit } from 'react-icons/md'
import { ImCheckmark2 } from 'react-icons/im'
import { AiOutlineDelete } from 'react-icons/ai'

import TaskConfig from '../TaskConfig';
import { add, edit, del, finish } from '../../redux/actions';

import './index.css'

const Task = ({ task, categoryName }) => {

    const [onEdit, setOnEdit] = useState(false);
    const [newInputValue, setNewInputValue] = useState('');

    const FINISHED = 'Finished';

    const dispatch = useDispatch();

    const payload = { ...task }

    const handleFinishTask = () => {
        const payload = { ...task, }
        dispatch(finish(payload)); 
        handleDeleteTask();
        console.log({ type: 'dispatch/finish', value: task})
    }

    const handleUncheckTask = () => {   
        dispatch(add(payload))
        dispatch(del({...payload, categoryTask: FINISHED}))
        console.log({ type: 'dispatch/uncheck', value: task})
    }

    const handleEditTask = () => {
        setOnEdit(false)
        const newPayload = {
            ...task,
            text: newInputValue
        }
        dispatch(edit(newPayload))
        console.log({ type: 'dispatch/edit', value: newInputValue})
    }

    const handleDeleteTask = (categoryName) => {
        console.log(payload)
        categoryName ? dispatch(del({...payload, categoryTask: categoryName})) : dispatch(del(payload))
        console.log({ type: 'dispatch/delete', value: task.id})
    }

    return (
        <div className="task-container">

            {onEdit 
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
                    
                    <h3>{task.text}</h3>
                    <div className="task-actions">
                        <MdEdit onClick={() => setOnEdit(true)} />
                        <AiOutlineDelete onClick={() => categoryName === FINISHED ? handleDeleteTask(FINISHED) : handleDeleteTask()}/>
                    </div>
                    <input type="checkbox" 
                        defaultChecked={categoryName === FINISHED}
                        onClick={categoryName === FINISHED ? handleUncheckTask : handleFinishTask} 
                    />
                </div>}
        </div>
    )        

}

export default Task;
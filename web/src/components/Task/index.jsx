import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, edit, del, finish } from '../../redux/actions';

import './index.css'

import { MdEdit } from 'react-icons/md'
import { ImCheckmark2 } from 'react-icons/im'
import { AiOutlineDelete } from 'react-icons/ai'

const Task = ({ task, categoryName }) => {

    const [onEdit, setOnEdit] = useState(false);
    const [newInputValue, setNewInputValue] = useState('');

    const FINISHED = 'finished';

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
        dispatch(del({...payload, categoryTask: 'finished'}))
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

    const handleDeleteTask = () => {
        console.log(payload)
        dispatch(del(payload));
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
                    <input type="checkbox" 
                        defaultChecked={categoryName === FINISHED}
                        onClick={categoryName === FINISHED ? handleUncheckTask : handleFinishTask} 
                    />
                    <h3>{task.text}</h3>
                    <div className="task-actions">
                        <MdEdit onClick={() => setOnEdit(true)} />
                        <AiOutlineDelete onClick={handleDeleteTask}/>
                    </div>
                </div>}
        </div>
    )        

}

export default Task;
import React from 'react';

// import './index.css'

import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from "react-router-dom"
import { BsArrowLeft } from 'react-icons/bs'

import { add, del } from '../../redux/actions'

const Finished = () => {
    const finishedReducer = useSelector(state => state.finishedTodos );
    const history = useHistory();
    const dispatch = useDispatch(); 


    const handleNavigateHome = () => {
        history.push('/');
    }

    const handleUncheckTask = (task) => {
        const payload = { ...task }

        dispatch(add(payload.taskOwner, payload))
        dispatch(del('Finished', payload.id))
        console.log({ type: 'dispatch/del', value: payload.id})
    }

    return (
        <div className="finished">
            <BsArrowLeft onClick={handleNavigateHome}/>
           <ul>
                {finishedReducer.map(task => (
                    <li key={task.id}>
                        <input type="checkbox" defaultChecked onClick={() => handleUncheckTask(task)}/>
                        <h2>{task.text}</h2>
                    </li>
                ))}
           </ul>
        </div>
    )
}

export default Finished
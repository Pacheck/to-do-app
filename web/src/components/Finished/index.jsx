import React from 'react';

import './index.css'

import { useSelector, useDispatch } from 'react-redux';

import { add } from '../../redux/actions'

const Finished = () => {

    const finishedReducer = useSelector(state => state.finishedTodos );


    const dispatch = useDispatch(); 

    const handleUncheckTask = (task) => {
        dispatch(add(task.taskOwner, task.payload))
    }

    console.log(finishedReducer)

    return (
        <div className="finished">
           {finishedReducer.map((task, index) => (
               <div key={index}>
                   <input type="checkbox" defaultChecked onClick={() => handleUncheckTask(task)}/>
                   <h2>{task.payload}</h2>
               </div>
           ))}
        </div>
    )
}

export default Finished
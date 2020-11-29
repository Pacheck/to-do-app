import React from 'react';

import { useHistory } from "react-router-dom"
import { BsArrowLeft } from 'react-icons/bs'
import { useSelector } from 'react-redux';

import Form from '../Form';
import Task from '../Task'

import './index.css'

const Personal = () => {
    const landingReducer = useSelector(state => state.personalTodos);
    const history = useHistory();
    const Personal = 'Personal'

    const handleNavigateHome = () => history.push('/');

    return (
        <div className="personal">
            <BsArrowLeft onClick={handleNavigateHome}/>
           <ul>
                {landingReducer.map(task => {
                    return (
                        <li key={task.id}>
                            <Task
                                reducerType={Personal}
                                task={task}  
                            />
                        </li>
                    )
                })}
           </ul>
           
            <Form reducerType={Personal} />

        </div>
    )
}

export default Personal;
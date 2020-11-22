import React from 'react';

import './index.css'

import { useSelector } from 'react-redux';

import Form from '../Form';
import Task from '../Task';

const Starred = () => {

    const starredReducer = useSelector(state => state.starredTodos);

    const Starred = 'Starred';

    return (
        <div className="starred">
            
            <ul>
                {starredReducer.map((task, index) => {
                    return (
                        <li key={index}>
                            <Task 
                                reducerType={Starred}
                                task={task} 
                                index={index} 
                            />
                        </li>
                    )
                })}
           </ul>

            <Form reducerType={Starred} />
        </div>
    )
}

export default Starred
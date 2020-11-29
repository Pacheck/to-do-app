import React from 'react';

import { useHistory } from "react-router-dom"
import { BsArrowLeft } from 'react-icons/bs'
import { useSelector } from 'react-redux';

import Form from '../Form';
import Task from '../Task';

const Starred = () => {
    const starredReducer = useSelector(state => state.starredTodos);
    const history = useHistory();
    const Starred = 'Starred';

    const handleNavigateHome = () => history.push('/');

    return (
        <div className="starred">
            < BsArrowLeft onClick={handleNavigateHome} />
            <ul>
                {starredReducer.map((task) => {
                    return (
                        <li key={task.id}>
                            <Task 
                                reducerType={Starred}
                                task={task}  
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
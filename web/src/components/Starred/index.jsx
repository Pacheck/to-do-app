import React from 'react';

import './index.css'

import { useDispatch, useSelector } from 'react-redux';

import { add, edit, del } from "../../redux/actions";

import Form from '../Form';
import Task from '../Task';

const Starred = () => {

    const starredReducer = useSelector(state => state.starredTodos);

    const Starred = 'Starred';

    const dispatch = useDispatch();

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
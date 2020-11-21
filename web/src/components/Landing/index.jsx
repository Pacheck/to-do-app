import React from 'react';

import './index.css'

import Form from '../Form';
import Task from '../Task'

import { useSelector } from 'react-redux';

const Landing = () => {

    const Landing = 'Landing'

    const landingReducer = useSelector(state => state.landingTodos);

    return (
        <div className="landing">

           <ul>
                {landingReducer.map((task, index) => {
                    return (
                        <li key={index}>
                            <Task 
                                reducerType={Landing}
                                task={task} 
                                index={index} 
                            />
                        </li>
                    )
                })}
           </ul>

            <Form reducerType={Landing} />

        </div>
    )
}

export default Landing;
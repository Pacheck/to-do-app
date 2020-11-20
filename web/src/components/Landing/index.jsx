import React, { useState } from 'react';

import './index.css'

// import Textbar from '../Textbar'
import Task from '../Task';

import { useDispatch, useSelector } from 'react-redux';

import { add, edit, del } from '../../redux/actions';

const Landing = () => {

    const dispatch = useDispatch();

    const landingReducer = useSelector(state => state.landingTodos);

    function handleSubmit(e){
        e.preventDefault();
        const value = e.target[0].value;

        console.log({ type: 'dispatch', value: value})
        
        dispatch(add('Landing', value))
    }

    function handleDeleteTask(index) {
        console.log(index)
        dispatch(del('Landing', index))
    }

    function handleEditTask(index, e){
        dispatch(edit('Landing', index, e.target.innerText))
    }

  

    return (
        <div className="landing">

           <ul>
                {landingReducer.map((task, index) => {
                    return (
                        <li key={index}>
                            <Task 
                                task={task} 
                                index={index} 
                                handleEditTask={handleEditTask}
                            />
                        </li>
                    )
                })}
           </ul>

            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <button type="submit">Adicionar a tasks</button>
            </form>


            {/* <Textbar /> */}
        </div>
    )
}

export default Landing;
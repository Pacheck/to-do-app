import React from 'react';

import './index.css'

// import Textbar from '../Textbar'

import { useDispatch, useSelector } from 'react-redux';

import { add, edit, del } from '../../redux/actions';

const Landing = () => {

    const dispatch = useDispatch();

    const landingReducer = useSelector(state => state.landingTodos);
    console.log(landingReducer)

    const tasks = ['Learn React', 'Learn Redux', 'Learn UX/UI', 'Learn Angular'];

    function handleSubmit(e){
        e.preventDefault();
        const value = e.target[0].value;

        dispatch(add('Landing', value))
    }

    function handleDeleteTask(index) {
        console.log(index)
        dispatch(del('Landing', index))
    }

    return (
        <div className="landing">
            <div>
                {tasks.map((task, index) => {
                    return <h3 key={index} >{task}</h3>
                })}
            </div>

            {landingReducer.map((task, index) => {
                return <h2 key={index} onClick={() => handleDeleteTask(index)}>{task}</h2>
            })}

            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <button type="submit">Adicionar a tasks</button>
            </form>


            {/* <Textbar /> */}
        </div>
    )
}

export default Landing;
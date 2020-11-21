import React from 'react';

import './index.css'

import { useDispatch } from 'react-redux';

import { add } from '../../redux/actions';

const Form = ({ reducerType }) => {

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        const value = e.target[0].value;

        console.log({ type: 'dispatch/add', value: value})
        
        dispatch(add( reducerType, value))

        e.target[0].value = '';
    }

    return(
        <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Adicione uma task"/>
                <button type="submit">Adicionar a tasks</button>
            </form>
    )
}

export default Form;
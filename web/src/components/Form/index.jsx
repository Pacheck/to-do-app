import React from 'react';
import { v4 as uuid_v4 } from "uuid";
import { useDispatch } from 'react-redux';

import { add } from '../../redux/actions';

import './index.css'

const Form = ({ reducerType }) => {

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        const value = e.target[0].value;

        const payload = {
            text : value,
            id: uuid_v4(),
            taskOwner: reducerType
        }
        
        console.log({ type: 'dispatch/add', payload: payload})
        
        dispatch(add(reducerType, payload))

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
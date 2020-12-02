import React from 'react';
import { v4 as uuid_v4 } from "uuid";
import { useDispatch } from 'react-redux';

import { add, create_category } from '../../redux/actions';

import './index.css'

const Form = ({ categoryName }) => {

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        const value = e.target[0].value;

        const payload = {
            id: uuid_v4(),
            text : value,
            categoryTask: categoryName
        }
        
        console.log({ type: 'dispatch/add', payload: payload})
        
        dispatch(add(payload))

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
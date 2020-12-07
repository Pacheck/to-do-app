import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';

import { v4 as uuid_v4 } from "uuid";
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { add } from '../../redux/actions';

const Task = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: '#23034d';
`

const AddTask = ({ categoryName }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const payload = {
            id: uuid_v4(),
            text : data.task,
            categoryTask: categoryName
        };

        dispatch(add(payload));

        console.log(payload);
        history.push(`/${categoryName}`);
    };

    return (
        <Task className="task-container">
            <button onClick={() => history.push(`/${categoryName}`)}>Voltar</button>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="task">What are you planning?</label>
                <input type="text" name="task" ref={register({ required: true, maxLength: 40 })} />
               
                <input type="submit" />
            </form>
        </Task>
    );
    
}

// id, text, categoryTask

// {errors.name && errors.name.type === "required" && <span>This is required</span>}
// {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }

export default AddTask

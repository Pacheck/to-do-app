import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';

import styled from 'styled-components'
import { v4 as uuid_v4 } from "uuid";
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';

import { add } from '../../redux/actions';

const Task = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: '#23034d';

    .nav {
        height: 20%;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        padding-top: 17%;
        margin-left: 35%;
    
        h4 {
            /* font-size: 14px; */
            margin-right: 39%;
            font-weight: 500;
            /* font-family: 'Roboto Slab', serif; */
            color: var(--defaultTextColor);
        }
    }
    
    form {
        height: 80%;

        display: flex;
        align-items: center;
        flex-direction: column;

        .label-task {
            margin-right: 43%;
            color: var(--grayTextColor);
        }

        .input-task {
            width: 90%;
            height: 30px;
            
            font-size: 23px;
            border: none;
            background: transparent;

            margin-top: 5%;

            :focus {
                border: none;
                outline: none;
            }

            ::placeholder {
                color: #c5bbbb
            }
        }

        hr {
            width: 90%;
            margin-top: 40%;
        }

        .input-submit {
            width: 100%;
            height: 40px;

            position: fixed;
            bottom: 0;

            color: #FFF;
            background-color: #2c6bcf;
        }
    }

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
            <div className="nav">
                <h4>New Task</h4>
                <MdClose size={27} onClick={() => history.push(`/${categoryName}`)}/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='label-task' htmlFor="task">What are you planning?</label>
                
                <input className='input-task' type="text" name="task" ref={register({ required: true, maxLength: 20 })} autoFocus placeholder='e.g. Finish the homework'/>
                {errors.task && errors.task.type === "required" && <span style={{ color: 'red'}}>This is required</span>}
                {errors.task && errors.task.type === "maxLength" && <span style={{ color: 'red'}}>Max length exceeded</span> }
                <hr />

                <input className="input-submit" type="submit" value='Create'/>
            </form>
        </Task>
    );
    
}

// id, text, categoryTask

// 
// 

export default AddTask

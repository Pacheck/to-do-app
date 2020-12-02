import React from 'react';
import styled from 'styled-components';

import { BsArrowLeft } from 'react-icons/bs';
// import {BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io'

import { useHistory } from 'react-router-dom';

import Form from '../Form';
import Task from '../Task';
import AddButton from '../AddButton';
import TaskConfig from '../TaskConfig';

import './index.css'

const StyledWrapper = styled.div`
        ${props => props.color? `background-color: ${props.color}` : `background-color: inherit`}
    `

const Category = ({ tasks, categoryName, icon, color }) => {
    const history = useHistory();
    const handleNavigateHome = () => history.push('/');

    const ADD_TASK = 'ADD_TASK';

    const handleAddTask = () => {
        console.log('handle add task')
    }

    

    return (
        <StyledWrapper className="category-wrapper" color={color}>
            <div className="category-nav">
                < BsArrowLeft onClick={handleNavigateHome} size={27}/>
                <TaskConfig />
            </div>

            <div className="category-info">
                <div>{icon}</div>
                <h2>{categoryName}</h2>
                <p>{tasks.length} tasks</p>
            </div>

            <ul className="tasks-list">
                {tasks.map((task) => 
                    (
                    <li key={task.id}>  {console.log(categoryName)}
                        <Task 
                            categoryName={categoryName}
                            task={task}  
                        />
                    </li>
                    )
                )}
           </ul>

          

           {categoryName !== 'Finished' ? <div className="add-task">
               <AddButton categoryName={categoryName} type={ADD_TASK}/>
           </div> : ''}
            
        </StyledWrapper>
    )
}

export default Category;
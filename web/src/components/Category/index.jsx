import React from 'react';
import styled from 'styled-components';

import { BsArrowLeft } from 'react-icons/bs';
// import { BiTask, BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io'

import { useHistory } from 'react-router-dom';

import Form from '../Form';
import Task from '../Task';
import TaskConfig from '../TaskConfig';

import './index.css'

const Category = ({ tasks, categoryName, icon, color }) => {
    const history = useHistory();
    const handleNavigateHome = () => history.push('/');

    const handleAddTask = () => {
        console.log('handle add task')
    }

    const StyledWrapper = styled.div`
        ${color? `background-color: ${color}` : `background-color: inherit`}
    `

    return (
        <StyledWrapper className="category-wrapper">
            <div className="category-nav">
                < BsArrowLeft onClick={handleNavigateHome} size={27}/>
                <TaskConfig />
            </div>

            <div className="category-info">
                <div>{icon}</div>
                <h2>{categoryName}</h2>
                <p>{tasks.length} tasks</p>
            </div>
            
            {/* <input type="color" onChange={(e) => console.log(e.target.value)}/> */}

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

           <button className="add-task">
               <IoMdAdd size={20} color='white'/>
           </button>

           {/* <BsPlusCircleFill className='add-task' size={37} onClick={handleAddTask} /> */}

            
            {categoryName !== 'Finished' 
            ? 
                <Form name={categoryName} /> 
            : 
                ''
            }
        </StyledWrapper>
    )
}

export default Category;
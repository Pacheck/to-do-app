import React from 'react';

import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import Form from '../Form';
import Task from '../Task';

const Category = ({ tasks, reducerType, key}) => {
    const history = useHistory();
    const handleNavigateHome = () => history.push('/');

    return (
        <div className="starred">
            < BsArrowLeft onClick={handleNavigateHome} />
            <ul>
                {tasks.map((task, index) => 
                    (
                    <li key={index}>
                        <Task 
                            reducerType={reducerType}
                            task={task}  
                        />
                    </li>
                    )
                )}
           </ul>

            <Form reducerType={reducerType} />
        </div>
    )
}

export default Category;
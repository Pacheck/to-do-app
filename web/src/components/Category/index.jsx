import React from 'react';

import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import Form from '../Form';
import Task from '../Task';

const Category = ({ tasks, categoryName }) => {
    const history = useHistory();
    const handleNavigateHome = () => history.push('/');

    return (
        <div className="starred">
            < BsArrowLeft onClick={handleNavigateHome} />
            {categoryName}
            <ul>
                {tasks.map((task) => 
                    (
                    <li key={task.id}>
                        <Task 
                            categoryName={categoryName}
                            task={task}  
                        />
                    </li>
                    )
                )}
           </ul>

            <Form name={categoryName} />
        </div>
    )
}

export default Category;
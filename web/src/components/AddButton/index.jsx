import React from 'react';
import styled from 'styled-components';

import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Button = styled.button`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    border: 1px solid rgba(82, 78, 78, 0.685);
    box-shadow: 0 0 0.2em rgb(10, 58, 121);

    background-color: rgb(70, 122, 207);

    position: fixed;
    bottom: 3%;
    left: 80%;
    outline: none;
`

const AddButton = ({ categoryName, type }) => {

    const route = type === 'ADD_TASK' ? `/${categoryName}/add-task` : 'add-category';

    return (
        <Link to={route}>
            <Button>
                <IoMdAdd size={20} color='white'/>
            </Button>
        </Link>
    )
}

export default AddButton;
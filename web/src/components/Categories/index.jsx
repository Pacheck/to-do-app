import React from 'react';

import { Link } from "react-router-dom";
import { MdSort } from 'react-icons/md'
//Default icon

import Card from '../Card';
import AddButton from '../AddButton'

import './index.css';

const Categories = ({ categories }) => {

    const ADD_CATEGORY = 'ADD_CATEGORY';
       
    return (      
            <nav className="navigator">
                <header>
                    <h2> Lists </h2>
                </header>
                
                {categories.map((category) => (
                    <Link to={`/${category.name}`} key={category.name}>
                        
                        <Card name={category.name} reducerLength={category.tasks.length}>
                            {category.icon}
                        </Card>
                    </Link>
                ))}

                <AddButton type={ADD_CATEGORY}/> 

            </nav>
    )
}

export default Categories;
import React from 'react';

import { Link } from "react-router-dom";

import { IoMdPerson } from 'react-icons/io'

import { BiTask } from 'react-icons/bi';
import { MdSort } from 'react-icons/md'


import Card from '../Card';

import './index.css';

const Categories = ({ categories }) => {
    return (      
            <nav className="navigator">
                <header>
                    <h2> Lists </h2>
                </header>
    
                {categories.map((category) => (
                    <Link to={`/${category.name}`} key={category.name}>
                        <Card name={category.name} reducerLength={category.tasks.length}>
                            <BiTask size={24} />
                        </Card>
                    </Link>
                ))}
            </nav>
    )
}

export default Categories;
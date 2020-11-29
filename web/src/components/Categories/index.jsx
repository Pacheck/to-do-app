import React from 'react';

import { Link } from "react-router-dom";
import { IoMdPerson } from 'react-icons/io'
import { HiStar } from 'react-icons/hi'

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
                            <HiStar size={24} />
                        </Card>
                    </Link>
                ))}
            </nav>
    )
}

export default Categories;
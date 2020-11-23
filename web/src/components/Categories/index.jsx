import React from 'react';

import { Link } from "react-router-dom";
import { IoMdPerson } from 'react-icons/io'
import { TiStarFullOutline } from "react-icons/ti";
import { BiTask } from 'react-icons/bi'

import Card from '../Card';

import './index.css';

const Categories = () => {
    return (      
            <nav className="navigator">
                <header>
                    <h2> Lists </h2>
                </header>
                
                <Link to="/personal">
                    <Card name='Personal'>
                        <IoMdPerson />
                    </Card>
                </Link>
                <Link to="/importante">
                    <Card name='Starred'>
                        <TiStarFullOutline />
                    </Card>
                </Link>
                <Link to="/finalizados">
                    <Card name='Finished'>
                        <BiTask />
                    </Card>
                </Link>        
            </nav>
    )
}

export default Categories;
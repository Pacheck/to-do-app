import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { IoMdPerson } from 'react-icons/io'
import { TiStarFullOutline } from "react-icons/ti";
import { BiTask } from 'react-icons/bi'

import Card from '../Card';

import './index.css';

const Categories = () => {

    const personalReducer = useSelector(state => state.personalTodos);
    const starredReducer = useSelector(state => state.starredTodos);
    const finishedReducer = useSelector(state => state.finishedTodos);

    console.log(personalReducer)

    return (      
            <nav className="navigator">
                <header>
                    <h2> Lists </h2>
                </header>
                
                <Link to="/personal">
                    <Card name='Personal' reducer={personalReducer}>
                        <IoMdPerson size={25} className='personal'/>
                    </Card>
                </Link>
                <Link to="/importante">
                    <Card name='Starred' reducer={starredReducer}>
                        <TiStarFullOutline size={25} className='starred'/>
                    </Card>
                </Link>
                <Link to="/finalizados">
                    <Card name='Finished' reducer={finishedReducer}>
                        <BiTask size={25} className='finished'/>
                    </Card>
                </Link>        
            </nav>
    )
}

export default Categories;
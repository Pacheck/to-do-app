import React from 'react';

import './index.css'

const Card = ({ name, children, reducerLength }) => {


    return <div className="card">
        {children}
        <div>
            <h4>{name}</h4>
            <p>{reducerLength} tasks</p>
        </div>
    </div>
}

export default Card;
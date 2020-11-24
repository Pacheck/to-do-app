import React from 'react';

import './index.css'

const Card = ({ name, children, reducer }) => {


    return <div className="card">
        {children}
        <h3>{name}</h3>
        <p>{reducer.length} tasks</p>
    </div>
}

export default Card;
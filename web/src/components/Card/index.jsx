import React from 'react';

import './index.css'

const Card = ({ name, children }) => {
    return <div className="card">
        {children}
        <h2>{name}</h2>
    </div>
}

export default Card;
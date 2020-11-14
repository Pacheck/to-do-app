import React from 'react';

import { Link } from "react-router-dom";

import avatar from '../../assets/cat.jpeg';

import './index.css'

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="profile-info">
                <div className="profile-avatar">
                    <img src={avatar} alt="foto de perfil"/>
                </div>
            </div>
            <nav className="navigator">
                <Link to="/">Home</Link>
                <Link to="/importante">Starred</Link>
                <Link to="/finalizados">Finished</Link>
            </nav>
        </div>
    )
}

export default Nav;
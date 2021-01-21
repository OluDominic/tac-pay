import React from 'react';
import Profile from '../profile'
import './index.scss'

const HomeView =({ children })=> {

    return (
        <div className="view">
            <Profile />

        <div className="view-menu">
            {children}
        </div>

        </div>
    );
}

export default HomeView;
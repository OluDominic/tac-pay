import React from 'react';
import LoginForm from '../../pages/LoginForm';
import LoginBackground from './../../loginwallpaper.jpg'
import './index.scss';

const Home =(props)=> {

    return (
        <div className="name">
            <div className="name-wrap">
            <div className="first-section" style={{
                    backgroundImage: `url(${LoginBackground})`
                }}>
                    <h1>
                    The Ambassadors Schools Smart Card System
                    </h1>
                    <h2>Portal Login</h2>
                    <LoginForm />
                </div>
                
            </div>
        </div>
    );
}

export default Home;
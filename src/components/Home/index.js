import React from 'react';
import LoginForm from '../../pages/LoginForm';
import LoginBackground from './../../loginwallpaper.jpg'
import {Helmet} from 'react-helmet'
import Logo from './../../taclogo.jpg'
import './index.scss';

const Home =(props)=> {

    return (
        <div className="name">
            <div className="name-wrap">
            <div className="first-section" style={{
                    backgroundImage: `url(${LoginBackground})`
                }}>
                    <Helmet>
                        <meta charSet="UTF-8" />
                        <title>TAS Smart Card System</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href={Logo} />
                    </Helmet> 
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
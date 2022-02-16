import React from 'react';
import LoginBackground from './../../Poketmoni.jpg'
import {Helmet} from 'react-helmet'
import Logo from './../../taclogo.jpg'

import './index.scss';
import Header from '../header';

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
                    <div>
                        <Header />
                    </div>
                    <div className="home-message">
                        <h1>
                        Helping to solve
                        </h1>
                        <h1>
                        Finantial technology
                        </h1>
                        <h1>
                        in the education world.
                        </h1>
                        <h3>Spend, save and document your</h3>
                        <h3>children's account while in school.</h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;
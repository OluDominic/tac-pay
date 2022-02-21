import React from 'react';
import LoginBackground from './../../Poketmoni.jpg'
import {Helmet} from 'react-helmet'
import Logo from './../../poketmonilogo.png'
import CountUp from 'react-countup'

import './index.scss';
import Header from '../header';

const Home =(props)=> {

    return (
        <div style={{
            backgroundImage: `url(${LoginBackground})`
        }} className="name">
            <div className="name-wrap">
            <div className="first-section" >
                    <Helmet>
                        <meta charSet="UTF-8" />
                        <title>Poketmoni</title>
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
                    <div className="home-msg-sect">
                        <div className="sch-reg">
                        <h1> <CountUp end={5} duration={2} /> </h1>
                        <h3 className="school">schools registered</h3>
                        {/* <h3 className="regi">registered</h3> */}
                        </div>
                        <div className="students-enrolled">
                        <h1> <CountUp end={5000} duration={5} />  </h1>
                        <h3 className="students">students enrolled</h3>
                        {/* <h3 className="enrolled">enrolled</h3> */}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;
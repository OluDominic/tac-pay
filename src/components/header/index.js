import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'
import Img from './../../taclogo.jpg'

const Header = props=> {

    return(
        <header className="header">
            <div className="headAll">
                <div className="logo">
                    <Link to="/">
                        <img src={Img} alt="img"/>
                    </Link>
                </div>

                <div className="tac-head">

                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/register">
                                Register
                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                LogOut
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header
import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'
import Img from './../../taclogo.jpg'

const Header = props=> {

    return(
        <header className="header">
            <div className="headAll">
                <div className="logo">
                    <Link>
                        <img src={Img} alt="img"/>
                    </Link>
                </div>

                <div className="tac-head">

                    <ul>
                        <li>
                            <Link>
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link>
                                Register
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header
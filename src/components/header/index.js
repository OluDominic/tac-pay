import React from 'react';
import { NavLink, useHistory} from 'react-router-dom'
import './index.scss';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Img from './../../taclogo.jpg'
import { logoutUser } from '../../redux/users/userActions';

const Header = props=> {
    const dispatch = useDispatch()
    const data = useSelector(state=> state.user.users)
    const history = useHistory();

    const home =()=> {
        if (data.usertype=='admin') {
            history.push('/admin')
        } else {
            history.push('/profile')
        }
    }

    const login =()=> {
        history.push('/login')
    }

    const logout=()=>{
        dispatch(logoutUser())
    }

    
    return(
        <header className="header">
            <div className="headAll">
                <div className="logo">
                    {/* <Link >
                        <img src={Img} alt="img"/>
                    </Link> */}
                    <ul>
                        {!data?
                        <li>
                            <Link to="/">
                                Poketmoni
                            </Link>
                        </li>
                        :null}
                    </ul>
                </div>
                <div className="hyperlinks">
                    <ul>
                        {!data?
                        <li>
                            <Link>
                                About
                            </Link>
                        </li>:null
                        }
                        {!data?
                        <li>
                            <Link>
                                Contact
                            </Link>
                        </li>:null
                        }
                        {!data?
                        <li>
                            <Link>
                                Plans
                            </Link>
                        </li>:null
                        }
                        {!data?
                        <li>
                            <Link>
                                Payment
                            </Link>
                        </li>:null
                        }
                    </ul>
                </div>

                <div className="tac-head">

                    <ul>
                    {data? 
                        <li style={{cursor: 'pointer'}} onClick={home}>
                                Home
                       
                        </li>
                    : <button onClick={login} className="signin">Sign in </button> }
                       {
                           data? <li style={{cursor: 'pointer'}} onClick={logout}>
                        
                           LogOut
                      
                   </li>:<button className="signup">Sign Up</button>
                       }
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header
import React from 'react';
import { useHistory} from 'react-router-dom'
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

    const logout=()=>{
        dispatch(logoutUser())
    }

    
    return(
        <header className="header">
            <div className="headAll">
                <div className="logo">
                    <Link >
                        <img src={Img} alt="img"/>
                    </Link>
                </div>

                <div className="tac-head">

                    <ul>
                    {data? 
                        <li style={{cursor: 'pointer'}} onClick={home}>
                                Home
                       
                        </li>
                    : null}
                       {
                           data? <li style={{cursor: 'pointer'}} onClick={logout}>
                        
                           LogOut
                      
                   </li>:null
                       }
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header
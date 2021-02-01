import React, {useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom'
import './index.scss';
import { Link } from 'react-router-dom'
import Img from './../../taclogo.jpg'

const Header = props=> {
    const history = useHistory()
    let [userdata,setUserdata] = useState({});
    let [userdataid,setUserdataid] = useState(null);

    useEffect(() => {
        let data = localStorage.getItem('userdata')

        if (!data) {
           // history.push('/')
        }
        else{
            data=JSON.parse(data);
            console.log(data)
        setUserdataid(data.id);
        }
    },[])

    const logout=()=>{
        localStorage.clear();
        setUserdata({});
        history.push('/')
    }
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

                       {
                           userdataid? <li style={{cursor: 'pointer'}} onClick={logout}>
                        
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
import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss'
import {Helmet} from 'react-helmet'
import Avatar from './../../avatar.png'

const Profile =()=> {
    
    const users = useSelector(state => state.user.users);
        

    return (
        <div className="profile">
            <Helmet>
                <title>TAS Smart Card | Profile</title>
            </Helmet>
            <div className="align">
                {/* <h1 className="portal">My Portal</h1> */}
            </div>
            <ul>
                <li>
                    <div className="avatar">
                        <img src={Avatar} alt="avatar" />
                    </div>
                </li>
                <li>
                    <span className="displayName">
                        Welcome {users.usertype=='admin'?'admin':users.fname}
                    </span>
                    <h3 style={{textAlign: 'center'}} className="studentID">User ID: 
                        {users.usertype=='admin'?'admin':users.id}
                    </h3>
                </li>
            </ul>
            
        </div>
    );
}

export default Profile;
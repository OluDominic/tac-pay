import React from 'react';
import './index.scss'
import Avatar from './../../avatar.png'

const Profile =(props)=> {

    return (
        <div className="profile">
            <div className="align">
                <h1>Student Portal</h1>
            </div>
            <ul>
                <li>
                    <div className="avatar">
                        <img src={Avatar} alt="avatar" />
                    </div>
                </li>
                <li>
                    <span className="displayName">
                        Welcome Dominic
                    </span>
                </li>
            </ul>
            
        </div>
    );
}

export default Profile;
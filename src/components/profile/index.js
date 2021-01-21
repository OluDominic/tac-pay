import React from 'react';
import Avatar from './../../avatar.png'
import { Link } from 'react-router-dom'

const Profile =(props)=> {

    return (
        <div className="profile">
            <div>
                <h1>Student Portal</h1>
            </div>
            <ul>
                <li>
                    <div className="avatar">
                        <img src={Avatar} alt="avatar" />
                    </div>
                </li>
                <li>
                    <h2>Welcome</h2>
                    <span className="">
                        name
                    </span>
                </li>
            </ul>

            <ul>
                <li>
                    <Link>
                        Check balace
                    </Link>
                </li>
                <li>
                    <Link>
                        Payment History
                    </Link>
                </li>
                <li>
                    <Link>
                        Check attendance
                    </Link>
                </li>
            </ul>
            
        </div>
    );
}

export default Profile;
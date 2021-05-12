import React, { useState ,useEffect} from 'react';
import './index.scss'
import {Helmet} from 'react-helmet'
import Avatar from './../../avatar.png'

const Profile =(props)=> {
    let [userdata,setUserdata] = useState({});

    useEffect(() => {
        let data = localStorage.getItem('userdata')

        if (!data) {
           // history.push('/')
        }
        else{
            data=JSON.parse(data);
            console.log(data,'popop')
      setUserdata(data);
        }
    },[]);

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
                        Welcome {userdata.usertype=='admin'?'Admin':userdata.fname}
                    </span>
                    <h3 className="studentID">User ID: 
                        {userdata.usertype=='admin'?'admin':userdata.id}
                    </h3>
                </li>
            </ul>
            
        </div>
    );
}

export default Profile;
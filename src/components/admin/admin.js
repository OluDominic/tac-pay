import React from 'react'
import { Link } from 'react-router-dom'
import './admin.scss'

const Admin =(props)=> {

    return(
        <div className="admin">
            <div className="adminStep">
                <h1>You are logged in as an admin</h1>
                <ul>
                    <li>
                        <Link to="/register">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/transaction">
                            Transaction
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Admin;
import React from 'react'
import { Helmet } from 'react-helmet';
import './admin.scss'

const Admin =(props)=> {

    return(
        <div className="admin">
            <div className="adminStep">
                <Helmet>
                    <title>TAS Smart Card | Admin</title>
                </Helmet>
                <h1>You are logged in as an admin</h1>
                {/*<ul>
                    <li>
                        <Link to="/register">
                            Register
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/payment">
                            Payment History
                        </Link>
                    </li>
                </ul>
                */}
            </div>
        </div>
    );
}

export default Admin;
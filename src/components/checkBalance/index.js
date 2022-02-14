import React from 'react'
import { useSelector } from 'react-redux';
import './index.scss'

const CheckBalance =()=> {

    const users = useSelector(state => state.user.users);
    
    return(

        <div className="balance">
            <div>
                <h2>Your current balance is: <strong> N{users.money}</strong></h2>
            </div>
        </div>
    );
}

export default CheckBalance;
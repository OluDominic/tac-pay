import React, {useState} from 'react'
import './index.scss'

const CheckBalance =()=> {

    const [balance, setBalance] = useState(" ")

    const handleChange =(e)=> {
        setBalance(e.target.value)
    }

    return(

        <div>
            <div>
                <h1>
                    Current Balance
                </h1>
                <h2>TAC Smart Card</h2>
                <h3>Your current balance is:</h3>
                <h2 onChange={handleChange} >N: {balance} </h2>
            </div>
        </div>
    );
}

export default CheckBalance;
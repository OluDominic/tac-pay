import React, {useState,useEffect} from 'react'
import './index.scss'

const CheckBalance =()=> {

    const [balance, setBalance] = useState(" ")
    let [userdata,setUserdata] = useState({});

    useEffect(() => {
        let data = localStorage.getItem('userdata')

        if (!data) {
           // history.push('/')
        }
        else{
            data=JSON.parse(data);
            setBalance(data.money);
      console.log(data,userdata,'userdatauserdata')
        }
    },[]);

    const handleChange =(e)=> {
        setBalance(e.target.value)
    }

    return(

        <div className="balance">
            <div>
                <h2>Your current balance is: <strong> N{balance}</strong></h2>
            </div>
        </div>
    );
}

export default CheckBalance;
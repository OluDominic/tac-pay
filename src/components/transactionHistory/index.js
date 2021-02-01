import React, {useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import './index.scss'
import { APPCONFIG } from './../../config/config'
import CheckBal from '../../pages/checkBalance/checkBalance'

const TransHistory =(props)=> {

    const [userTrans, setUserTrans] = useState([])

    let [userdata,setUserdata] = useState({});
    
    useEffect(() => {
       
         fetchTrasactionsHistory()  
          
      },[]);

    const fetchTrasactionsHistory =()=> {
        let data = localStorage.getItem('userdata')

        if (!data) {
           // history.push('/')
        }
        else{
            data=JSON.parse(data);
           
        setUserdata(data);
        }
        axios.get(`${APPCONFIG.appapi}/usertransactions?id=${data.id}`)
        .then((data)=> {
            setUserTrans(data.data)
            console.log(userTrans,'user 5');
        })
        .catch((error)=> {
            console.log(error)
        })
    
    }

    return(
        <div>
            <div>
                <CheckBal />
                
                <h1> Transaction History</h1>
                <div>
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <table className="paymentHeader" border="0" cellPadding="20" cellSpacing="10">
                                    <tbody>
                                        <tr>
                                            <th>
                                               ID
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                            <th>
                                                TagID
                                            </th>
                                            <th>
                                                Time
                                            </th>
                                            <th>
                                                Location
                                            </th>
                                            <th>
                                               Transaction
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table border="0" cellSpacing="10" cellPadding="20">
                                    <tbody>
                                        {
                                            userTrans.map((data, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            {data.id}
                                                        </td>
                                                        <td>
                                                            {data.amount}
                                                        </td>
                                                        <td>
                                                            {data.tagid}
                                                        </td>
                                                        <td>
                                                            {data.time}
                                                        </td>
                                                        <td>
                                                            {data.location}
                                                        </td>
                                                        <td>
                                                            {data.transactionid}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default TransHistory;
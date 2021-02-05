import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { APPCONFIG} from './../../config/config'
import './index.scss'


const DepositHistory =()=> {
    const history = useHistory();
    const [deposit, setDeposit] = useState([])
    const [userDeposit, setUserDeposit] = useState({})

    useEffect(() => {
        fetchDepositHistory()
    }, [])

    const fetchDepositHistory =()=> {
        let data = localStorage.getItem('userdata')

        if (!data) {
            
        }
        else{
            data=JSON.parse(data);
            history.push('/admin')
           
        setUserDeposit(data);
        }
        axios.get(`${APPCONFIG.appapi}/userdeposit?id=${data.id}`)
        .then((data)=> {
            setDeposit(data.data)
            console.log(deposit,'user 5');
        })
        .catch((error)=> {
            console.log(error)
        })
    
    }

    return (
        <div>
            <h2>Deposit History</h2>
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
                                                Date
                                            </th>
                                            <th>
                                                Comment
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
                                            userDeposit.map((data, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            {data.id}
                                                        </td>
                                                        <td>
                                                            {data.money}
                                                        </td>
                                                        <td>
                                                            {data.date}
                                                        </td>
                                                        <td>
                                                            {data.comment}
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
    );
}

export default DepositHistory;
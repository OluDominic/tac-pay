import React, { useState, useEffect } from 'react';
import CheckBalance from '../checkBalance';
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput';
import FormWrapper from '../formWrapper';
import axios from 'axios'
import {APPCONFIG} from './../../config/config'
import './index.scss'

const MyTran =()=> {

    const [trans, setTrans] = useState([])
    const handleSubmit =(event)=> {
        event.preventDefault();
    }

    useEffect(()=> {
        fetchUserTrans()
    },[setTrans])

    const fetchUserTrans = () => {
        console.log(8999)
    const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/usertrans?id=${trans}`, {
            headers
        }).then((data) => {
           
         setTrans(data.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <div>
            <div>
                <h1>
                    <CheckBalance />
                </h1>
                <form onSubmit={handleSubmit}>
                    <FormWrapper>
                        <FormInput 
                        type="text"
                        name="trans"
                        value={trans}
                        placeholder="Enter Student ID"
                        handleChange={e => setTrans(e.target.value) }
                        />

                        <Button onClick={fetchUserTrans} type="submit">
                            Get Transaction
                        </Button>
                    </FormWrapper>
                </form>
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <table className="paymentHeader" border="0" cellPadding="20" cellSpacing="15">
                                    <tbody>
                                        <tr>
                                            <th>
                                               ID
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                            <th>
                                                Time
                                            </th>
                                            <th>
                                                Location
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
                                            trans.map((data, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            {data.id}
                                                        </td>
                                                        <td>
                                                            {data.amount}
                                                        </td>
                                                        <td>
                                                            {data.time}
                                                        </td>
                                                        <td>
                                                            {data.location}
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

export default MyTran;
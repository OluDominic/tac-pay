import React, { useState } from 'react';
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput';
import FormWrapper from '../formWrapper';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper
  } from '@material-ui/core';
import axios from 'axios';
import {APPCONFIG} from './../../config/config'
import moment from 'moment';
import './index.scss'

const UserDetails =()=> {

    const [user, setUser] = useState('');
    const [details, setDetails] = useState([]);
    const onSubmit =(e)=> {
        e.preventDefault();
    }

    const fetchUserDetails = () => {
    const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log(details);
        axios.get(`${APPCONFIG.appapi}/details/${user}`, {
            headers
        }).then((data) => {
           
         setDetails(data.data);
        }).catch((error) => {
            console.log(error);
        })


    }

    const stylesHead = {
        fontSize: '20px',
        cursor: 'pointer',
        width: 'auto',
        fontWeight: '500',
        textTransform: 'uppercase',
        padding: '4px 4px'
      };

      const stylesBody = {
        fontSize: '15px',
        cursor: 'pointer',
        width: '15%',
        fontWeight: '400',
        padding: '4px 4px'
      };
    return (
        <div>
            <h1>
                Get user details
            </h1>
            <div>
                <form onSubmit={onSubmit}>
                    <FormWrapper>
                        <FormInput 
                        type="text"
                        name="user"
                        value={user}
                        placeholder="Enter User Surname"
                        handleChange={e => setUser(e.target.value)}
                        />
                        <Button onClick={fetchUserDetails}>
                            Get details
                        </Button>
                    </FormWrapper>
                </form>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}>ID</TableCell>
                                <TableCell style={stylesHead}>Firstname</TableCell>
                                <TableCell style={stylesHead}>Lastname</TableCell>
                                <TableCell style={stylesHead}>Pin</TableCell>
                                <TableCell style={stylesHead}>Balance</TableCell>
                                <TableCell style={stylesHead}>Password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {details.map && details.map((data, i) => {
                             return (
                                <TableRow key={i}>
                                    <TableCell style={stylesBody}>{data.id}</TableCell>
                                    <TableCell style={stylesBody}>{data.fname}</TableCell>
                                    <TableCell style={stylesBody}>{data.lname}</TableCell>
                                    <TableCell style={stylesBody}>{data.pin}</TableCell>
                                    <TableCell style={stylesBody}>{data.balance}</TableCell>
                                    <TableCell style={stylesBody}>{data.password}</TableCell>
                                </TableRow>
                            )})}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default UserDetails;
import React, { useState } from 'react';
import axios from 'axios';
import { APPCONFIG } from './../../config/config';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper, makeStyles
  } from '@material-ui/core';
import './index.scss';
import FormWrapper from '../formWrapper';
import FormInput from '../forms/FornInput/formInput';
import Button from '../forms/Buttons';

const AdminDeposit =()=> {
    const [deposit, setDeposit] = useState('');
    const [deposite, setDeposite] = useState([]);

    const useStyles = makeStyles({
        table: {
        },
      });

    const handleSubmit =(e)=> {
        e.preventDefault();
        reset();
    }

      const stylesHead = {
        fontSize: '20px',
        cursor: 'pointer',
        width: '15%',
        fontWeight: '500',
        textTransform: 'uppercase',
        padding: '4px 4px'
      };

      const reset =()=> {
          setDeposit('');
      }

      const stylesBody = {
        fontSize: '15px',
        cursor: 'pointer',
        width: '15%',
        fontWeight: '400',
        padding: '4px 4px'
      };

      const fetchUserTrans = () => {
        console.log(8999)
    const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log(deposit);
        axios.get(`${APPCONFIG.appapi}/usercredit/${deposit}`, {
            headers
        }).then((data) => {
           
            setDeposite(data.data);
        }).catch((error) => {
            console.log(error);
        })


    }

    return (
        <div>
            <h1>Deposit History</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <FormWrapper>
                        <FormInput
                        type="text"
                        name="deposit"
                        placeholder="Enter ID"
                        value={deposit}
                        handleChange={e => setDeposit(e.target.value)}
                        />
                        <Button onClick={fetchUserTrans} type="submit" >
                            Enter
                        </Button>
                    </FormWrapper>
                </form>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table className={useStyles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}>ID</TableCell>
                                <TableCell style={stylesHead}>Money</TableCell>
                                <TableCell style={stylesHead}>Date</TableCell>
                                <TableCell style={stylesHead}>Comment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {deposite.map((data, i) => {
                             return (
                                <TableRow key={i}>
                                    <TableCell style={stylesBody}>{data.id}</TableCell>
                                    <TableCell style={stylesBody}>{data.money}</TableCell>
                                    <TableCell style={stylesBody}>{data.date}</TableCell>
                                    <TableCell style={stylesBody}>{data.comment}</TableCell>
                                </TableRow>
                            )})}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default AdminDeposit;
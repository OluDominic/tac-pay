import React, { useState } from 'react';
import axios from 'axios';
import { APPCONFIG } from './../../config/config';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper
  } from '@material-ui/core';
import './index.scss';
import FormWrapper from '../formWrapper';
import FormInput from '../forms/FornInput/formInput';
import Button from '../forms/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDepHis } from '../../redux/admin/adminActions';

const AdminDeposit =()=> {
    const [deposit, setDeposit] = useState('');

    const dispatch = useDispatch()
    const data = useSelector(state=> state.admin.data)
    const loading = useSelector(state=> state.admin.loading)

    const handleSubmit =(e)=> {
        e.preventDefault();
        reset();
        if(deposit) {
            dispatch(fetchUserDepHis(deposit))
            loading && <em>Loading User Deposit History...</em>
        }
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
                        <Button type="submit" >
                            Enter
                        </Button>
                    </FormWrapper>
                </form>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}>ID</TableCell>
                                <TableCell style={stylesHead}>Money</TableCell>
                                <TableCell style={stylesHead}>Date</TableCell>
                                <TableCell style={stylesHead}>Comment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map && data.map((data, i) => {
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
import React, { useState } from 'react';
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput';
import FormWrapper from '../formWrapper';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper
  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './index.scss'
import { getTransaction } from '../../redux/admin/adminActions';
 
const MyTran =()=> {
 
    const [tran, setTran] = useState('');
    const user = useSelector(state=> state.admin.data)
    const loading = useSelector(state=> state.admin.loading)
    const dispatch = useDispatch();
    

    const handleSubmit =(event)=> {
        event.preventDefault();
        reset();
        if(tran) {
            dispatch(getTransaction(tran))
        }
    }

    const reset =()=> {
        setTran('')
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
 
    return(
        <div>
            <div>
                <h1>User Transactions</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <FormWrapper>
                        <FormInput 
                        type="text"
                        name="trans"
                        value={tran}
                        placeholder="Enter Student ID"
                        handleChange={e => setTran(e.target.value) }
                        />
 
                        <Button type="submit">
                            Get Transaction
                        </Button>
                    </FormWrapper>
                </form>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}>ID</TableCell>
                                <TableCell style={stylesHead}>Transaction ID</TableCell>
                                <TableCell style={stylesHead}>Amount</TableCell>
                                <TableCell style={stylesHead}>Tag ID</TableCell>
                                <TableCell style={stylesHead}>Date</TableCell>
                                <TableCell style={stylesHead}>Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {loading && <em>Loading User Transactions History...</em>}
                            {user.map && user.map((data, i) => {
                             return (
                                <TableRow key={i}>
                                    <TableCell style={stylesBody}>{data.id}</TableCell>
                                    <TableCell style={stylesBody}>{data.transactionid}</TableCell>
                                    <TableCell style={stylesBody}>{data.amount}</TableCell>
                                    <TableCell style={stylesBody}>{data.tagid}</TableCell>
                                    <TableCell style={stylesBody}>{moment(data.time).format('DD/MM/YYYY')}</TableCell>
                                    <TableCell style={stylesBody}>{data.location}</TableCell>
                                </TableRow>
                            )})}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
 
export default MyTran;
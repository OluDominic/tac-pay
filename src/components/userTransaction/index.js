import React, { useEffect } from 'react';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
  } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
//import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss'
import { fetchUserTrans } from '../../redux/users/userActions';

const UserTransaction =()=> {

    const dispatch = useDispatch()
    const data = useSelector(state=> state.user.users)
    const user = useSelector(state=> state.user.user)
    const loading = useSelector(state=> state.user.loading)

    useEffect(()=> {
        dispatch(fetchUserTrans(data.id))
    },[])

      const stylesHead = {
        fontSize: '20px',
        cursor: 'pointer',
        width: '15%',
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
            <h1>Transaction History</h1>
            
            
            <div>
                <TableContainer component={Paper}>
                <Table id="table-to-xls">
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>Amount </TableCell>
                            <TableCell style={stylesHead}>Date </TableCell>
                            <TableCell style={stylesHead}>Location </TableCell>
                            {/* <TableCell style={stylesHead}>Action </TableCell> */}
                        </TableRow>
                    </TableHead>
                    {loading && <em>Loading Transaction History...</em>}
                    <TableBody>
                    
                        {user.map && user.map((data, i)=> (
                            
                            <TableRow className="linkss" key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.amount}</TableCell>
                                <TableCell style={stylesBody}>{moment(data.time).format('YYYY-MM-DD')}</TableCell>
                                <TableCell style={stylesBody}>{data.location}</TableCell>
                                {/* <TableCell style={stylesBody}><TableButton onClick={()=>{
                                                handleClick(data.id)
                                }}> Edit</TableButton> </TableCell> */}
                            </TableRow>
                           
                        ))}
                        
                    </TableBody>
                </Table>
            </TableContainer>
                </div>
        </div>
    );
}

export default UserTransaction;

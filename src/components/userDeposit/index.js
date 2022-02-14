import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
  import { fetchUserDeposit } from '../../redux/users/userActions';
import './index.scss'


const DepositHistory =()=> {

    const dispatch = useDispatch();
    const data = useSelector(state=> state.user.users)
    const user = useSelector(state=> state.user.user)
    const loading = useSelector(state=> state.user.loading)

    useEffect(() => {
        dispatch(fetchUserDeposit(data.id))
    }, []);

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
            <h2>Deposit History</h2>
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
                        {loading && <em>Loading Your Deposit History...</em>}
                    </TableHead>
                    <TableBody>
                    
                        {user.map && user.map((data, i)=> (
                            
                            <TableRow className="linkss" key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.money}</TableCell>
                                <TableCell style={stylesBody}>{data.date}</TableCell>
                                <TableCell style={stylesBody}>{data.comment}</TableCell>
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

export default DepositHistory;
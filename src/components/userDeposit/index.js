import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { APPCONFIG} from './../../config/config'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
import './index.scss'


const DepositHistory =()=> {
    //const history = useHistory();
    const [deposit, setDeposit] = useState([])
    const [userDeposit, setUserDeposit] = useState({})

    useEffect(() => {
        fetchDepositHistory()
    }, []);

    const fetchDepositHistory =()=> {
        let data = localStorage.getItem('userdata')

        if (!data) {
            
        }
        else{
            data=JSON.parse(data);
            //history.push('/admin')
           
        setUserDeposit(data);
        }
        axios.get(`${APPCONFIG.appapi}/userdeposit?id=${data.id}`)
        .then((data)=> {
            setDeposit(data.data)
        })
        .catch((error)=> {
            console.log(error)
        })
    
    }

    const useStyles = makeStyles({
        table: {
        },
      });

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
                <Table id="table-to-xls" className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>Amount </TableCell>
                            <TableCell style={stylesHead}>Date </TableCell>
                            <TableCell style={stylesHead}>Location </TableCell>
                            {/* <TableCell style={stylesHead}>Action </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    
                        {deposit.map((data, i)=> (
                            
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
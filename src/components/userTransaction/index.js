import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {APPCONFIG} from './../../config/config';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment';
import './index.scss'

const UserTransaction =()=> {

    const [trans, setTrans] = useState([]);
    const [userTrans, setUserTrans] = useState({})

    useEffect(()=> {
        fetchTransactions()
    },[])

    const fetchTransactions=()=> {
        let data = localStorage.getItem('userdata')

        if (!data) {
            
        }
        else{
            data=JSON.parse(data);
            //history.push('/admin')
           
            setUserTrans(data);
        }
        console.log(data.id)
        axios.get(`${APPCONFIG.appapi}/usertrans?id=${data.id}`, {
            
        }).then((data) => {
           
         setTrans(data.data);
        }).catch((error) => {
            console.log(error);
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
            <h1>Transaction History</h1>
            
            
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
                    
                        {trans.map((data, i)=> (
                            
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

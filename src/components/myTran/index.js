import React, { useState } from 'react';
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput';
import FormWrapper from '../formWrapper';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper, makeStyles
  } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import {APPCONFIG} from './../../config/config'
import './index.scss'
 
const MyTran =()=> {
 
    const [trans, setTrans] = useState([]);
    const [tran, setTran] = useState('');
    const handleSubmit =(event)=> {
        event.preventDefault();
        reset();
    }

    const reset =()=> {
        setTran('')
    }
    
    const useStyles = makeStyles({
        table: {
        },
      });

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
    //const {id} = useParams();
    const fetchUserTrans = () => {
        console.log(8999)
    const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log(tran);
        axios.get(`${APPCONFIG.appapi}/usertranss/${tran}`, {
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
 
                        <Button onClick={fetchUserTrans} type="submit">
                            Get Transaction
                        </Button>
                    </FormWrapper>
                </form>
                <h1>
                   {trans.money}
                </h1>
                <TableContainer component={Paper}>
                    <Table className={useStyles.table}>
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
                            {trans.map((data, i) => {
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
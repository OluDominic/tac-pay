import React, { useState, useEffect} from 'react'
import './index.scss'
import axios from 'axios';
import { Helmet } from 'react-helmet'
import  {APPCONFIG} from '../../config/config';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper, makeStyles
  } from '@material-ui/core';
import moment from 'moment';
import JwPagination from 'jw-react-pagination';
import FormInput from './../forms/FornInput/formInput';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const PaymentHistory =()=> {

    const [trans, setTrans ] = useState([]);
    const [search, setSearch] = useState("");

   
    // useEffect(()=> {
    //     getCharacter()
    //     if (search && search.length > 1) {
    //         if (search.length % 2 === 0) {
    //             getCharacter()
    //         }
    //     }
    // },[search]);

    // const getCharacter=()=> {
    //     const results = trans.filter(trans => 
    //         trans.id.toLowerCase().includes(search.toLowerCase()) ||
    //         trans.date.toLowerCase().includes(search.toLowerCase()));
    //         setTrans(results)
    // }

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

      const handleChange = event => {
        setSearch(event.target.value);
      };
      useEffect(() => {
        getCharacter()
        if (search && search.length > 1) {
            if (search.length % 2 === 0) {
                getCharacter();
            } 
        } 
      }, [search]);

      const getCharacter =()=> {
        const results = trans.filter( trans =>
            trans.date.toLowerCase().includes(search.toLowerCase()) || 
            trans.id.toLowerCase().includes(search.toLowerCase())
          );
          setTrans(results);
      }

    useEffect(() => {
        console.log("Behavior when the value of 'foo' changes.");
       fetchPaymentHistory()
      },[setTrans]);

        const fetchPaymentHistory = () => {
            console.log(8999)
        const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer lll`,
                "Access-Control-Allow-Origin":"*"
            }
    console.log('here')
            axios.get(`${APPCONFIG.appapi}/fetchtransactions?page=1`, {
                headers
            }).then((data) => {
               
             setTrans(data.data);
            }).catch((error) => {
                console.log(error);
            })
        }

    return (
        <div>
            <Helmet>
                <title>TAS Smart Card | Payment History</title>
            </Helmet>
            <h1>
                Payment History
            </h1>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="Payment History XLS"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
            <div>
                <FormInput
                name="search"
                value={search || ""}
                placeholder="Search Bar"
                handleChange={handleChange}
                />
            </div>

            <div>
               
            <TableContainer component={Paper}>
                    <Table className={useStyles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}>ID</TableCell>
                                <TableCell style={stylesHead}>Amount</TableCell>
                                <TableCell style={stylesHead}>Date</TableCell>
                                <TableCell style={stylesHead}>Comment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {trans.map((data, i) => {
                             return (
                                <TableRow key={i}>
                                    <TableCell style={stylesBody}>{data.id}</TableCell>
                                    <TableCell style={stylesBody}>{data.money}</TableCell>
                                    <TableCell style={stylesBody}>{moment(data.date).format('DD/MM/YYYY')}</TableCell>
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

export default PaymentHistory;
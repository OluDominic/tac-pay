import React, { useState, useEffect} from 'react'
import './index.scss'
import { Helmet } from 'react-helmet'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper
  } from '@material-ui/core';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from './../forms/FornInput/formInput';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { fetchAllPayHis } from '../../redux/admin/adminActions';

const PaymentHistory =()=> {

    const [trans, setTrans ] = useState([]);
    const [search, setSearch] = useState("");
    
    const user = useSelector(state=> state.admin.data)
    const loading = useSelector(state=> state.admin.loading)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchAllPayHis())
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
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}>ID</TableCell>
                                <TableCell style={stylesHead}>Amount</TableCell>
                                <TableCell style={stylesHead}>Date</TableCell>
                                <TableCell style={stylesHead}>Comment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {loading && <em>Loading Payment History...</em>}
                            {user.map && user.map((data, i) => {
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
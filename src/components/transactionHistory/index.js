import React, {useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './index.scss'
import moment from 'moment';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper
  } from '@material-ui/core';
import JwPagination from 'jw-react-pagination';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import FormInput from '../forms/FornInput/formInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransHis } from '../../redux/admin/adminActions';

const TransHistory =(props)=> {

    const [userTrans, setUserTrans] = useState([])
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const user = useSelector(state=> state.admin.data)
    const loading = useSelector(state=> state.admin.loading)
    const dispatch = useDispatch()
    
    useEffect(() => {
       
         dispatch(fetchAllTransHis())
          
      },[]);

      const fetchANew = (add)=>{
        let newpage = add?page+1:page-1;
         setPage(newpage);
      }

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
        const results = userTrans.filter( userTrans =>
            userTrans.time.toLowerCase().includes(search.toLowerCase()) 
          );
          setUserTrans(results);
      }

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

    return(
        <div>
            <div>
                {/*<CheckBal /> */}
                <Helmet>
                  <title>TAS Smart Card | Transaction History</title>
               </Helmet>
                <h1> Transaction History</h1>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="Transaction History XLS"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                    <div>
                        <FormInput
                        name="search"
                        value={search || ""}
                        placeholder="Search box"
                        handleChange={handleChange}
                        />
                    </div>
                <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}>Transaction ID</TableCell>
                                <TableCell style={stylesHead}>Student ID</TableCell>
                                <TableCell style={stylesHead}>Amount</TableCell>
                                <TableCell style={stylesHead}>Tag ID</TableCell>
                                <TableCell style={stylesHead}>Date</TableCell>
                                <TableCell style={stylesHead}>Location</TableCell>
                            </TableRow>
                        {loading && <em>Loading Transaction History...</em>}
                        </TableHead>
                        <TableBody>
                            {user.map && user.map((data, i) => {
                             return (
                                <TableRow key={i}>
                                    <TableCell style={stylesBody}>{data.transactionid}</TableCell>
                                    <TableCell style={stylesBody}>{data.id}</TableCell>
                                    <TableCell style={stylesBody}>{data.amount}</TableCell>
                                    <TableCell style={stylesBody}>{data.tagid}</TableCell>
                                    <TableCell style={stylesBody}>{moment(data.time).format('DD/MM/YYYY')}</TableCell>
                                    <TableCell style={stylesBody}>{data.location}</TableCell>
                                </TableRow>
                            )})}
                        </TableBody>
                    </Table>
                </TableContainer>

                
  <JwPagination items={userTrans} onChangePage={ fetchANew} /> 
                </div>
                
            </div>
        </div>
    );
}

export default TransHistory;
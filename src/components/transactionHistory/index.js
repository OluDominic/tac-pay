import React, {useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { Helmet } from 'react-helmet'
import './index.scss'
import { APPCONFIG } from './../../config/config'
import moment from 'moment';
import JwPagination from 'jw-react-pagination';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import FormInput from '../forms/FornInput/formInput';
//import CheckBal from '../../pages/checkBalance/checkBalance'

const TransHistory =(props)=> {

    const [userTrans, setUserTrans] = useState([])
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
       
         fetchTrasactionsHistory()  
          
      },[setUserTrans]);

      const fetchANew = (add)=>{
        let newpage = add?page+1:page-1;
         setPage(newpage);
      }

      let oldList = userTrans.map(userTrans => {
          return {id: userTrans.id, amount: userTrans.amount, 
        time: userTrans.time, location: userTrans.location}
      })

      
      

    const fetchTrasactionsHistory =()=> {
        console.log('Transaction fetched!')
        const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer lll`,
                "Access-Control-Allow-Origin":"*"
            }
    console.log(page,'here')
            axios.get(`${APPCONFIG.appapi}/usertransactions?page=1`, {
                headers
            }).then((data) => {
               
                setUserTrans(data.data);
            }).catch((error) => {
                console.log(error);
            })
    
    }

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
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                    <div>
                        <FormInput
                        name="search"
                        value={search}
                        placeholder="Search box"
                        handleChange={e => {
                            if(e.target.value) {
                                const filtered = userTrans.filter (userTrans => {
                                    return userTrans.time.toLowerCase().includes(e.target.value.toLowerCase()) || 
                                    userTrans.location.toLowerCase().includes(e.target.value.toLowerCase())
                                })
                                setUserTrans(filtered)
                            } else {
                                setUserTrans(oldList)
                            }
                            setSearch(e.target.value)
                        }}
                        />
                    </div>
                <div>
                <table id="table-to-xls" border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <table className="paymentHeader" border="0" cellPadding="20" cellSpacing="15">
                                    <tbody>
                                        <tr>
                                            <th>
                                               ID
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                            <th>
                                                Time
                                            </th>
                                            <th>
                                                Location
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table border="0" cellSpacing="10" cellPadding="20">
                                    <tbody>
                                        {
                                            userTrans.map((data, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            {data.id}
                                                        </td>
                                                        <td>
                                                            {data.amount}
                                                        </td>
                                                        <td>
                                                            {moment(data.time).format('DD/MM/YYYY')}
                                                        </td>
                                                        <td>
                                                            {data.location}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

                
  <JwPagination items={userTrans} onChangePage={ fetchANew} /> 
                </div>
                
            </div>
        </div>
    );
}

export default TransHistory;
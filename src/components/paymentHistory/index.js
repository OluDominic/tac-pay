import React, { useState, useEffect} from 'react'
import './index.scss'
import axios from 'axios';
import { Helmet } from 'react-helmet'
import  {APPCONFIG} from '../../config/config';
import JwPagination from 'jw-react-pagination';
import FormInput from './../forms/FornInput/formInput';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const PaymentHistory =()=> {

    const [trans, setTrans ] = useState([]);
    const [page, setPage ] = useState(1);
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

    let oldlist = trans.map(trans => {
        return {id: trans.id, comment: trans.comment, 
            date: trans.date, money: trans.money};
    });

    useEffect(() => {
        console.log("Behavior when the value of 'foo' changes.");
       fetchPaymentHistory()
      },[setTrans]);
    
 const fetchANew = (add)=>{
   let newpage = add?page+1:page-1;
    setPage(newpage);
 }

        const fetchPaymentHistory = () => {
            console.log(8999)
        const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer lll`,
                "Access-Control-Allow-Origin":"*"
            }
    console.log(page,'here')
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
                handleChange={e => {
                    if (e.target.value) {
                        const filteredTeams = trans.filter(trans => {
                          return trans.date.toLowerCase().includes(e.target.value.toLowerCase())
                        });
                        setTrans(filteredTeams);
                      } else {
                        setTrans(oldlist);
                      }
                      setSearch(e.target.value);
                  }}
                />
            </div>

            <div>
                <table id="table-to-xls" border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <table className="paymentHeader" border="0" cellPadding="10" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <th>
                                               ID
                                            </th>
                                            <th>
                                                Payment Details
                                            </th>
                                            <th>
                                                Payment Date
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table border="0" cellSpacing="0" cellPadding="10">
                                    <tbody>
                                        {
                                            trans.map((data,i)=>{
                                                // console.log(data)
                                                return (
                                                
                                                    <tr  key={i}>
                                                        <td>
                                                            {data.id}
                                                        </td>
                                                        <td>
                                                            {data.comment}
                                                        </td>
                                                        <td>
                                                            {data.date}
                                                        </td>
                                                        <td>
                                                            {data.money}
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

                
  <JwPagination items={trans} onChangePage={ fetchANew} /> 
          
            </div>
        </div>
    );
    
}

export default PaymentHistory;
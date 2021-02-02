import React, { useState, useEffect} from 'react'
import FormSelect from './../forms/FormSelect'
import { useHistory} from 'react-router-dom'
import './index.scss'
import axios from 'axios';
import  {APPCONFIG} from '../../config/config';
import JwPagination from 'jw-react-pagination';

const PaymentHistory =()=> {
    const history = useHistory();

    const [trans, setTrans ] = useState([])
    const [page, setPage ] = useState(1)

    const handleTrans =(e)=> {
        const option = e.target.value;
        history.push(`/transaction/${option}`)
    }

    useEffect(() => {
        console.log("Behavior when the value of 'foo' changes.");
       fetchPaymentHistory()
      },[page]);
    
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
    const transOptions = {
        defaultValue: handleTrans,
        options: [{
            name: 'Show all',
            value: ''
        }, {
            name: 'Credit',
            value: ''
        }, {
            name: 'Debit',
            value: ''
        }],
        handleChange: handleTrans
    }

    return (
        <div>
            <h1>
                Payment History
            </h1>

            <FormSelect {...transOptions}/>

            <div>
                <table border="0" cellPadding="0" cellSpacing="0">
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

                {/** 
  <JwPagination items={trans} onChangePage={ fetchANew} /> */}
  <JwPagination items={trans} onChangePage={ fetchANew} /> 
          
            </div>
        </div>
    );
    
}

export default PaymentHistory;
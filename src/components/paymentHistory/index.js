import React from 'react'
import './index.scss'

const PaymentHistory =()=> {

    return (
        <div>
            <h1>
                Transanction History
            </h1>

            <div>
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <table className="paymentHeader" border="0" cellPadding="10" cellSpacing="0">
                                    <tbody>
                                        <tr>
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
                                <table border="0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                -
                                            </td>
                                            <td>
                                                -
                                            </td>
                                            <td>
                                                -
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}

export default PaymentHistory;
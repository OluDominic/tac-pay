import React from 'react'
import FormSelect from './../forms/FormSelect'
import { useHistory } from 'react-router-dom'
import './index.scss'

const TransHistory =(props)=> {
    const history = useHistory();

    const handleTrans =(e)=> {
        const option = e.target.value;
        history.push(`/transaction/${option}`)
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

    return(
        <div>
            <div>
                <h1> Transaction History</h1>
                <FormSelect {...transOptions} />
            </div>
        </div>
    );
}

export default TransHistory;
import React, {useState, useEffect} from 'react'
import Button from '../forms/Buttons';
import Popup from './../popup'
import axios from 'axios'
import ErrorFail from './error';
import Naira from 'react-naira';
import ErrorSucc from './errorSucc';
import FormInput from '../forms/FornInput/formInput'
import FormWrapper from '../formWrapper';
import { Helmet } from 'react-helmet';
import {APPCONFIG} from './../../config/config';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss'
import { fetchBalance, postDeposit } from '../../redux/admin/adminActions';

const Deposit =(props)=> {
    const [amount, setAmount] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState('')
    const [comment, setComment] = useState("")
    const [amountErr, setAmountErr] = useState({})
    const [dateErr, setDateErr] = useState({})
    const [idErr, setIdErr] = useState({})
    const [commentErr, setCommentErr] = useState({})
    const [errorMessage, setErrorMessage] = useState('');
    const [balance, setBalance] = useState('');
    let [id, setID] = useState("")

    const dispatch = useDispatch();
    const users = useSelector(state=> state.admin.data)

    const handleSubmit =(event) => {
        event.preventDefault();
        const isValid = formValidation()
            if (isValid) {
                Change()
            }
            if (id && amount && date && comment ) {
                dispatch(postDeposit(id, amount, date, comment ))
               
            } 
    }

    const handleSubmits =(event) => {
        event.preventDefault();
        if(balance) {
            dispatch(fetchBalance(balance))
        }
        reset();
    }
    
    const formValidation=()=> {
        const idErr = {}
        const amountErr = {}
        const dateErr = {}
        const commentErr = {}
        let isValid = true

        if(!id) {
            idErr.idField = "Enter Valid ID"
            isValid = false
        }
        if(!amount) {
            amountErr.amountField = "Enter Amount"
            isValid = false
        }
        if(!date) {
            dateErr.dateField = "Enter Date"
            isValid = false
        }
        if(!comment) {
            commentErr.commentField = "Enter ID"
            isValid = false
        }

        setIdErr(idErr);
        setDateErr(dateErr);
        setAmountErr(amountErr);
        setCommentErr(commentErr);
        return isValid;
    }


    const Change =()=> {
        setAmount('');
        setID('');
        setDate('');
        setComment('');
    }

    const reset =()=> {
        setBalance('')
    }
    const togglePopup =()=> {
        setIsOpen(!isOpen);
    }
    const configWrap = {
        head: 'Get Student Balance'
    }

    const configWraps = {
        head: 'Amount to deposit'
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>TAS Smart Card | Deposit Page</title>
                </Helmet>
                <h1 style={{textAlign:"center"}}>Deposit/Balance Page</h1>
                <FormWrapper {...configWrap}>
                    <form onSubmit={handleSubmits}>
                    <FormInput 
                    type="text"
                    name="balance"
                    value={balance}
                    placeholder="Enter ID"
                    handleChange={e=> setBalance(e.target.value)}
                    />
                    <Button type="submit">
                        Submit
                    </Button>
                    <br />
                    <h3>{users.fname} {users.lname} Balance is <Naira>{users.money}</Naira></h3>
                    </form>

                </FormWrapper>
                
                
                <FormWrapper {...configWraps}>
                    
                {errorMessage=='success'?<ErrorSucc /> : null }
                {errorMessage=='error'?<ErrorFail /> : null }
                    <form onSubmit={handleSubmit}>

                        <FormInput
                        required
                        type="text"
                        name="id"
                        value={id}
                        placeholder="ID"
                        handleChange={e => setID(e.target.value) }
                        />
                        {Object.keys(idErr).map((key)=> {
                            return <div style={{ fontSize: 12, color: "red"}}>{idErr[key]}</div>
                        })}


                        <FormInput
                        required
                        type="text"
                        name="amount"
                        value={amount}
                        placeholder="Amount"
                        handleChange={e => setAmount(e.target.value) }
                        />
                        {Object.keys(amountErr).map((key)=> {
                            return <div style={{ fontSize: 12, color: "red"}}>{amountErr[key]}</div>
                        })}

                        <FormInput
                        required
                        type="text"
                        name="date"
                        value={date}
                        placeholder="Date (DD/MM/YYYY)"
                        handleChange={e => setDate(e.target.value) }
                        />
                        {Object.keys(dateErr).map((key)=> {
                            return <div style={{ fontSize: 12, color: "red"}}>{dateErr[key]}</div>
                        })}

                        <FormInput
                        required
                        type="text"
                        name="comment"
                        value={comment}
                        placeholder="Comment"
                        handleChange={e => setComment(e.target.value) }
                        />      
                        {Object.keys(commentErr).map((key)=> {
                            return <div style={{ fontSize: 12, color: "red"}}>{commentErr[key]}</div>
                        })}
                        <Button type="submit"> Sunmit </Button>

                        {/* {isOpen && <Popup 
                         content={
                             <>
                                <h3>Are you sure of the amount? N{amount}</h3>
                                <Button onClick={depositAPI}>Confirm Deposit</Button>
                             </>
                         }
                         handleClose={togglePopup}
                        />}
                        <div><h3 style={{color: 'green'}}>{msg} </h3></div> */}
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default Deposit;
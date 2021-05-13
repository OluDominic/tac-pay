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
import './index.scss'

const Deposit =(props)=> {
    const [amount, setAmount] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState('')
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])
    const [amountErr, setAmountErr] = useState({})
    const [dateErr, setDateErr] = useState({})
    const [idErr, setIdErr] = useState({})
    const [commentErr, setCommentErr] = useState({})
    const [errorMessage, setErrorMessage] = useState('');
    const [balance, setBalance] = useState('');
    const [fetchBalance, setFetchBalance] = useState([]);
    let [id, setID] = useState("")
    const [msg, setMsg] = useState('')

    const handleSubmit =(event, ) => {
        event.preventDefault();
        const isValid = formValidation()
            if (isValid) {
                Change()
            }
    }

    const handleSubmits =(event, ) => {
        event.preventDefault();
        reset();
    }

    useEffect(()=> {
        if (depositAPI) {
            Change();
        }
    }, [])
    
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

    function SubmitButton() {
        if (amount && date && id && comment ) {
            return <div>
                <Button onClick={depositAPI } type="submit">
            Deposit
        </Button>
        
            </div>
        } else {
            return <Button onClick={depositAPI} type="submit" disabled>
            Deposit
        </Button>
        }
    }

    const depositAPI =()=> {
        axios.post("http://localhost:8000/deposit", {
            id: id,
            money: amount,
            date: date,
            comment: comment
        })
        window.location.replace('http://localhost:3000/deposit')
        .then((response) => {
            
            console.log(response)
        }).catch(error=> {
            setErrorMessage('error')
        }) 
        
    }

    useEffect(()=> {
        fetchUserBal()
    },[])

    const fetchUserBal = () => {
    const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log(balance);
        axios.get(`${APPCONFIG.appapi}/userbalance/${balance}`, {
            headers
        }).then((data) => {
           
         setFetchBalance(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })


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
                    <Button onClick={fetchUserBal} type="submit">
                        Submit
                    </Button>
                    <br />
                    <h3>{fetchBalance.fname} {fetchBalance.lname} Balance is <Naira>{fetchBalance.money}</Naira></h3>
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
                        <SubmitButton />

                        {isOpen && <Popup 
                         content={
                             <>
                                <h3>Are you sure of the amount? N{amount}</h3>
                                <Button onClick={depositAPI}>Confirm Deposit</Button>
                             </>
                         }
                         handleClose={togglePopup}
                        />}
                        <div><h3 style={{color: 'green'}}>{msg} </h3></div>
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default Deposit;
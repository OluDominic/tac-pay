import React, {useState, useEffect} from 'react'
import Button from '../forms/Buttons';
import Popup from './../popup'
import axios from 'axios'
import ErrorFail from './error';
import ErrorSucc from './errorSucc';
import { useHistory } from 'react-router-dom'
import FormInput from '../forms/FornInput/formInput'
import FormWrapper from '../formWrapper';
import './index.scss'

const Deposit =(props)=> {
    const history = useHistory();
    const [amount, setAmount] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState('')
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])
    const [amountErr, setAmountErr] = useState({})
    const [dateErr, setDateErr] = useState({})
    const [idErr, setIdErr] = useState({})
    const [commentErr, setCommentErr] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    let [id, setID] = useState("")

    const handleSubmit =(event, ) => {
        event.preventDefault();
        const isValid = formValidation()
            if (isValid) {
                Change()
            }
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
            return <Button onClick={depositAPI } type="submit">
            Deposit
        </Button>
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
        }).then((response) => {
            setErrorMessage('success')
            console.log(response)
        }).catch(error=> {
            setErrorMessage('error')
        }) 
    }


    const Change =()=> {
        setAmount('');
        setID('');
        setDate('');
        setComment('')
    }

    const togglePopup =()=> {
        setIsOpen(!isOpen);
    }
    const configWrap = {
        head: 'Amount to deposit'
    }

    return (
        <div>
            <div>
                <h2 style={{textAlign:"center"}}>Deposit Page</h2>
                <FormWrapper {...configWrap}>
                    
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
                        placeholder="Date"
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
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default Deposit;
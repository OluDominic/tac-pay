import React, {useState} from 'react'
import Button from '../forms/Buttons';
import Popup from './../popup'
import axios from 'axios'
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
    let [id, setID] = useState("")

    const handleSubmit =(event) => {
        event.preventDefault();
    }

    const depositAPI =()=> {
        axios.post("http://localhost:8000/deposit", {
            id: id,
            money: amount,
            date: date,
            comment: comment
        }).then((response) => {
            console.log(response)
        })
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
                <h2>Deposit Page</h2>
                <FormWrapper {...configWrap}>
                    <form onSubmit={handleSubmit}>

                        <FormInput
                        type="text"
                        name="id"
                        value={id}
                        placeholder="ID"
                        handleChange={e => setID(e.target.value) }
                        />

                        <FormInput
                        type="text"
                        name="amount"
                        value={amount}
                        placeholder="Amount"
                        handleChange={e => setAmount(e.target.value) }
                        />

                        <FormInput
                        type="text"
                        name="date"
                        value={date}
                        placeholder="Date"
                        handleChange={e => setDate(e.target.value) }
                        />

                        <FormInput
                        type="text"
                        name="comment"
                        value={comment}
                        placeholder="Comment"
                        handleChange={e => setComment(e.target.value) }
                        />      

                        <Button onClick={togglePopup} type="submit">
                            Deposit
                        </Button>

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
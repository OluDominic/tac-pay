import React, {useState} from 'react'
import Button from '../forms/Buttons';
import Popup from './../popup'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'
import FormInput from '../forms/FornInput/formInput'
import FormWrapper from '../formWrapper';
import './index.scss'

const Deposit =(props)=> {
    const alert = useAlert()
    const history = useHistory();
    const [amount, setAmount] = useState(" ");
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit =(event) => {
        event.preventDefault();
    }

    const togglePopup =()=> {
        setIsOpen(!isOpen);
    }

    const handleDeposit =()=> {
        history.push('/profile')
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
                        name="amount"
                        value={amount}
                        handleChange={e => setAmount(e.target.value) }
                        />

                        <Button onClick={togglePopup} type="submit">
                            Deposit
                        </Button>

                        {isOpen && <Popup 
                         content={
                             <>
                                <h3>Are you sure of the amount? N{setAmount}</h3>
                                <Button onClick={handleDeposit}>Confirm Deposit</Button>
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
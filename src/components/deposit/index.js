import React, {useState} from 'react'
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput'
import FormWrapper from '../formWrapper';
import './index.scss'

const Deposit =(props)=> {

    const [amount, setAmount] = useState(" ");

    const handleSubmit =(event) => {
        event.preventDefault();
    }

    const configWrap = {
        head: 'Deposit Amount'
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

                        <Button type="submit">
                            Deposit
                        </Button>
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default Deposit;
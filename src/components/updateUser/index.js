import React, { useState } from 'react';
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput';
import axios from 'axios';
import './index.scss';

const UpdateUser =()=> {
    const [tagid, setTagid] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surName, setSurname] = useState('');
    const [pin, setPin] = useState('');
    const [amount, setAmount] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit =(e)=> {
        e.preventDefault();
    }

    

    return (
        <div>
            <h1>Update Details</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <FormInput
                    name="tagid"
                    type="text"
                    value={tagid}
                    handleChange={e => setTagid(e.target.value)}
                    />
                    <FormInput
                    name="firstname"
                    type="text"
                    value={firstName}
                    handleChange={e => setFirstName(e.target.value)}
                    />
                    <FormInput
                    name="surname"
                    type="text"
                    value={surName}
                    handleChange={e => setSurname(e.target.value)}
                    />
                    <FormInput
                    name="pin"
                    type="text"
                    value={pin}
                    handleChange={e => setPin(e.target.value)}
                    />
                    <FormInput
                    name="amount"
                    type="text"
                    value={amount}
                    handleChange={e => setAmount(e.target.value)}
                    />
                    <FormInput
                    name="password"
                    type="text"
                    value={password}
                    handleChange={e => setPassword(e.target.value)}
                    />
                    <FormInput
                    name="active"
                    type="text"
                    value={active}
                    handleChange={e => setActive(e.target.value)}
                    />
                    <FormInput
                    name="email"
                    type="text"
                    value={email}
                    handleChange={e => setEmail(e.target.value)}
                    />
                    <Button type="submit">
                        Update
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
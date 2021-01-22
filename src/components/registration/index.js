import React, { useState } from 'react';
import FormInput from './../forms/FornInput/formInput'
import Button from './../forms/Buttons'
import './index.scss'
import FormWrapper from '../formWrapper';

const Registration =(props)=> {

    const [firstName, setFirstName] = useState(" ")
    const [surName, setSurname] = useState(" ")
    const [pin, setPin] = useState(" ")
    const [password, setPassword] = useState(" ");
    const [email, setEmail] = useState(" ")

    const handleSubmitForm = event => {
        event.preventDefault();
    }

    const configMod = {
        head: 'Register'
    }

    return (

        <div className="formWrap">
            <FormWrapper {...configMod}>
                <form onSubmit={handleSubmitForm}>

                    
                    <FormInput 
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="Firstname"
                        handleChange={e=> setFirstName(e.target.value)}
                    />
                    <FormInput 
                        type="text"
                        name="surName"
                        value={surName}
                        placeholder="Surname"
                        handleChange={e=> setSurname(e.target.value)}
                    />
                    <FormInput 
                        type="number"
                        name="pin"
                        value={pin}
                        placeholder="Pin"
                        handleChange={e=> setPin(e.target.value)}
                    />
                    <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e=> setEmail(e.target.value)}
                    />

                    <Button type="submit">
                        Register
                    </Button>
                </form>
            </FormWrapper>
        </div>
    )
}

export default Registration;
import React, { useState } from 'react';
import FormInput from './../forms/FornInput/formInput'
import Button from './../forms/Buttons'
import './index.scss'

const Registration =()=> {

    const [displayName, setDisplayName] = useState(" ")
    const [firstName, setFirstName] = useState(" ")
    const [surName, setSurname] = useState(" ")
    const [pin, setPin] = (" ")
    const [email, setEmail] = (" ")

    const handleSubmitForm = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmitForm}>

            <FormInput 
                type="text"
                name="displayName"
                value={displayName}
                placeholder="Display name"
                handleChange={e=> setDisplayName(e.target.value)}
            />
            <FormInput 
                type="text"
                name="firstName"
                value={firstName}
                placeholder="Full name"
                handleChange={e=> setFirstName(e.target.value)}
            />
            <FormInput 
                type="text"
                name="surName"
                value={surName}
                placeholder="Full name"
                handleChange={e=> setSurname(e.target.value)}
            />
            <FormInput 
                type="text"
                name="pin"
                value={pin}
                placeholder="Full name"
                handleChange={e=> setPin(e.target.value)}
            />
            <FormInput 
                type="text"
                name="email"
                value={email}
                placeholder="Full name"
                handleChange={e=> setEmail(e.target.value)}
            />

            <Button type="submit">
                Register
            </Button>
        </form>
    )
}

export default Registration;
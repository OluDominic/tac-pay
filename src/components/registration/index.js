import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormInput from './../forms/FornInput/formInput'
import Button from './../forms/Buttons'
import './index.scss'
import FormWrapper from '../formWrapper';
import { Helmet } from 'react-helmet'

const Registration =(props)=> {

    const [firstName, setFirstName] = useState("")
    const [surName, setSurname] = useState("")
    const [pin, setPin] = useState("")
    const [money, setMoney] = useState("")
    const [password, setPassword] = useState("");
    const [active, setActive] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmitForm = event => {
        event.preventDefault();
    }

    const configMod = {
        head: 'New Student Registeration'
    }

    const register =()=> {
        axios.post("http://localhost:8000/register", {
            fname: firstName,
            lname: surName,
            pin: pin,
            money: money,
            password: password,
            active: active,
            email: email
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div>
            <Helmet>
                  <title>TAS Smart Card | Registration Page</title>
               </Helmet>
            <FormWrapper {...configMod}>
            <div className="formWrap">
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            )
                        })}
                    </ul>
                )}
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
                        type="text"
                        name="money"
                        value={money}
                        placeholder="Money"
                        handleChange={e=> setMoney(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />
                    <FormInput 
                        type="number"
                        name="active"
                        value={active}
                        placeholder="Active"
                        handleChange={e=> setActive(e.target.value)}
                    />
                    
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e=> setEmail(e.target.value)}
                    />

                    <Button onClick={register} type="submit">
                        Register
                    </Button>
                </form>
            </div>
        </FormWrapper>
        </div>
        
        
    )
}

export default Registration;
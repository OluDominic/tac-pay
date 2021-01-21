import React, {useState} from 'react';
import FormInput from './../forms/FornInput/formInput'
import Button from './../forms/Buttons'
import './index.scss'

const Login =(props)=> {

    const [id, setId] = useState(" ")
    const [password, setPassword] = useState(" ")

    const handleSubmitForm = (event) => {
        event.preventDefault();
    }

    return (

        <form onSubmit={handleSubmitForm}>
            <FormInput 
                type="text"
                name="id"
                value={id}
                handleChange={ e => setId(e.target.value)}
            />
            <FormInput
                type="text"
                name="password"
                value={password}
                handleChange={ e => setPassword(e.target.value)}
            />

            <Button type="submit">
                Login
            </Button>

        </form>
    );
}

export default Login;
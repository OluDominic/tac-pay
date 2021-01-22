import React, {useState} from 'react';
import FormInput from './../forms/FornInput/formInput'
import Button from './../forms/Buttons'
import FormWrapper from './../formWrapper'
import { useHistory } from 'react-router-dom'
import './index.scss'

const Login =(props)=> {
    const history = useHistory();
    const [id, setId] = useState(" ")
    const [password, setPassword] = useState(" ")

    const handleSubmitForm = (event) => {
        event.preventDefault();
        history.push('/profile')
    }
    

    const configWrap = {
        head: 'Login Here'
    }

    return (

        <div className="formWrap">
            
            <FormWrapper {...configWrap}>
                <form onSubmit={handleSubmitForm}>
                    <FormInput 
                        type="text"
                        name="id"
                        value={id}
                        placeholder="ID"
                        handleChange={e => setId(e.target.value)}
                        />
                    <FormInput
                        type="text"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <Button type="submit">
                        LogIn
                    </Button>

                </form>
            </FormWrapper>
        </div>
    );
}

export default Login;
import React, { useState } from 'react';
import FormInput from './../forms/FornInput/formInput'
import Button from './../forms/Buttons'
import FormWrapper from './../formWrapper'
import PropTypes from 'prop-types'
import { useDispatch} from 'react-redux'
import './index.scss'
import { fetchUser } from '../../redux/users/userActions';


const Login =()=> {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState('');

    const handleSubmitForm = event => {
        event.preventDefault();
        if (username && password) {
            dispatch(fetchUser(username, password))
        }
    }

    const configWrap = {
        head: 'Login Here'
    }

    return (

        <div className="formWrap">
            
            <FormWrapper {...configWrap}>
                <form onSubmit={handleSubmitForm}>
                    <h3 style={{color: 'red'}}>{loginMessage}</h3>
                    <FormInput 
                        type="text"
                        name="id"
                        value={username}
                        placeholder="ID"
                        handleChange={e => setUsername(e.target.value)}
                        />
                    <FormInput
                        type="password"
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


export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
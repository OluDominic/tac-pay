import React, {useState} from 'react';
import FormInput from './../forms/FornInput/formInput'
import Button from './../forms/Buttons'
import FormWrapper from './../formWrapper'
import PropTypes from 'prop-types'
import axios from 'axios'
import './index.scss'
import { useHistory } from 'react-router-dom'





const Login =({props, setToken})=> {
    const history = useHistory();
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmitForm = async event => {
        event.preventDefault();
       await loginUser({
            id,
            password
        });
    }

    const loginUser =()=> {
        axios.post("http://localhost:8000/login", {
            username : id,
            password: password
        },{
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        })
        .then((response) => {
            let data = response.data;
            localStorage.setItem("userdata",JSON.stringify(data));
            if (data.usertype=='admin') {
                history.push('/admin')
            } else {
                history.push('/profile')
            }
        }).catch((error)=>{
            console.log(error)
        })
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

                    <Button onClick={loginUser} type="submit">
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
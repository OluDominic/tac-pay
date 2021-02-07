import React, {useState} from 'react'
import Button from '../forms/Buttons'
import FormInput from '../forms/FornInput/formInput'
import FormWrapper from '../formWrapper'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import './index.scss'

const DeleteUser =()=> {

    const [deleteUser, setDeleteUser] = useState("")
    const configWrapper = {
        head : 'Delete User'
    }

    const deletePage =()=> {
        axios.post("http://localhost:8000/delete", {
            id: deleteUser
        })
        .then((response)=> {
            console.log(response)
        })
    }
    return (
        <div>
            <Helmet>
                  <title>TAS Smart Card | Delete User</title>
               </Helmet>
            <h2>Delete Student</h2>
            <form>
                <FormWrapper {...configWrapper}>
                    <FormInput 
                    type="text"
                    name="delete"
                    value={deleteUser}
                    placeholder="Enter Student ID"
                    handleChange={e => setDeleteUser(e.target.value) }
                    />

                    <Button type="submit" onClick={deletePage}>
                        Delete User
                    </Button>
                </FormWrapper>
            </form>
            
        </div>
    );
}

export default DeleteUser;


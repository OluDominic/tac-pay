import React, {useEffect, useState} from 'react'
import Button from '../forms/Buttons'
import FormInput from '../forms/FornInput/formInput'
import FormWrapper from '../formWrapper'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import './index.scss'
import { fetchDelete } from '../../redux/admin/adminActions';

const DeleteUser =()=> {

    const [deleteUser, setDeleteUser] = useState("");
    const dispatch = useDispatch()
    
    const configWrapper = {
        head : 'Delete User'
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        if(deleteUser) {
            dispatch(fetchDelete(deleteUser))
            reset();
        }
    }

    const reset =()=> {
        setDeleteUser('')
    }
    return (
        <div>
            <Helmet>
                  <title>TAS Smart Card | Delete User</title>
               </Helmet>
            <h2>Delete Student</h2>
            <form onSubmit={handleSubmit}>
                <FormWrapper {...configWrapper}>
                    <FormInput 
                    type="text"
                    name="delete"
                    value={deleteUser}
                    placeholder="Enter Student ID"
                    handleChange={e => setDeleteUser(e.target.value) }
                    />

                    <Button type="submit">
                        Delete User
                    </Button>
                </FormWrapper>
            </form>
            
        </div>
    );
}

export default DeleteUser;


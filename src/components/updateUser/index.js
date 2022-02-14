import React, { useEffect, useState } from 'react';
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput';
import axios from 'axios';
import './index.scss';
import { useParams } from 'react-router';
import { APPCONFIG } from '../../config/config';
import FormWrapper from '../formWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdate, getUserUpdate } from '../../redux/admin/adminActions';

const UpdateUser =()=> {
    
    
    const [update, setUpdate] = useState('');
    
    const dispatch = useDispatch()
    const data = useSelector(state=> state.admin.data)
    const [student, setStudent] = useState([]);
    const handleSubmit =(e)=> {
        e.preventDefault();
        dispatch(fetchUpdate(data.id, data.tagid, 
            data.fname, data.lname, data.pin, data.password,
            data.active, data.email))
    }

    let {id} = useParams();


    const handleChange = e => {
        const {name, value} = e.target;
        setStudent({...data, [name]: value});
    }

    console.log(student)

    useEffect(()=> {
        dispatch(getUserUpdate(id))
    },[])

    const headline= {
        head: "Update Student Info"
    }
    

    return (
        <div>
            <h1>Update Student Page</h1>
            <div>
                <FormWrapper {...headline}>
                <form onSubmit={handleSubmit}>
                <FormInput
                    name="tagid"
                    type="hidden"
                    value={data.id}
                    />
                    <label>Tag ID</label>
                    <FormInput
                    name="tagid"
                    type="text"
                    placeholder="TagID"
                    value={data.tagid}
                    handleChange={handleChange}
                    />
                    <label>Firstname</label>
                    <FormInput
                    name="firstname"
                    type="text"
                    placeholder="Fname"
                    value={data.fname}
                    handleChange={handleChange}
                    />
                    <label>Lastname</label>
                    <FormInput
                    name="surname"
                    type="text"
                    placeholder="Lname"
                    value={data.lname}
                    handleChange={handleChange}
                    />
                    <label>Pin</label>
                    <FormInput
                    name="pin"
                    type="text"
                    placeholder="Pin"
                    value={data.pin}
                    handleChange={handleChange}
                    />
                    <label>Password</label>
                    <FormInput
                    name="password"
                    type="text"
                    placeholder="Password"
                    value={data.password}
                    handleChange={handleChange}
                    />
                    <label>Active</label>
                    <FormInput
                    name="active"
                    type="text"
                    placeholder="Active"
                    value={data.active}
                    handleChange={handleChange}
                    />
                    <label>Email</label>
                    <FormInput
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    handleChange={handleChange}
                    />
                    <p style={{color: 'green'}}>{update}</p>
                    <Button type="submit" >
                        Update
                    </Button>
                </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default UpdateUser;
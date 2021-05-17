import React, { useEffect, useState } from 'react';
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput';
import axios from 'axios';
import './index.scss';
import { useParams } from 'react-router';
import { APPCONFIG } from '../../config/config';
import FormWrapper from '../formWrapper';

const UpdateUser =()=> {
    
    const [student, setStudent] = useState([]);
    const [update, setUpdate] = useState('');

    const handleSubmit =(e)=> {
        e.preventDefault();
    }

    let {id} = useParams();

    useEffect(()=> {
        fetchUser()
    },[]);

    const handleChange = e => {
        const {name, value} = e.target;
        setStudent({...student, [name]: value});
    }

    const fetchUser =()=> {

        const headers = {
            'Content-Type': 'application/json',
            Authorization : 'Bearer 111',
            'Access-Control-Allow-Origin' : '*'
        }
        console.log(student.id)
        axios.get(`${APPCONFIG.appapi}/fetchstudent/${id}`, {
            headers
        })
        .then((data, response)=> {
            setStudent(data.data[0])
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    const headline= {
        head: "Update Student Info"
    }

    const updateStudent=()=> {

        axios.put(`http://localhost:8000/updateuser/${id}`, {
            id: student.id,
            tagid: student.tagid,
            fname: student.fname,
            lname: student.lname,
            pin: student.pin,
            money: student.money,
            password: student.password,
            active: student.active,
            email: student.email
        })
        setUpdate('Record updated successfully')
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
                    value={student.id}
                    />
                    <label>Tag ID</label>
                    <FormInput
                    name="tagid"
                    type="text"
                    value={student.tagid}
                    handleChange={handleChange}
                    />
                    <label>Firstname</label>
                    <FormInput
                    name="firstname"
                    type="text"
                    placeholder="Fname"
                    value={student.fname}
                    handleChange={handleChange}
                    />
                    <label>Lastname</label>
                    <FormInput
                    name="surname"
                    type="text"
                    placeholder="Lname"
                    value={student.lname}
                    handleChange={handleChange}
                    />
                    <label>Pin</label>
                    <FormInput
                    name="pin"
                    type="text"
                    placeholder="Pin"
                    value={student.pin}
                    handleChange={handleChange}
                    />
                    <label>Amount</label>
                    <FormInput
                    name="amount"
                    type="text"
                    placeholder="Money"
                    value={student.money}
                    handleChange={handleChange}
                    />
                    <label>Password</label>
                    <FormInput
                    name="password"
                    type="text"
                    placeholder="Password"
                    value={student.password}
                    handleChange={handleChange}
                    />
                    <label>Active</label>
                    <FormInput
                    name="active"
                    type="text"
                    placeholder="Active"
                    value={student.active}
                    handleChange={handleChange}
                    />
                    <label>Email</label>
                    <FormInput
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={student.email}
                    handleChange={handleChange}
                    />
                    <p style={{color: 'green'}}>{update}</p>
                    <Button type="submit" onClick={()=> {
                        updateStudent(student.id)
                    }}>
                        Update
                    </Button>
                </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default UpdateUser;
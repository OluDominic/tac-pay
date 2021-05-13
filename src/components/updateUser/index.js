import React, { useEffect, useState } from 'react';
import Button from '../forms/Buttons';
import FormInput from '../forms/FornInput/formInput';
import axios from 'axios';
import './index.scss';
import { useParams } from 'react-router';
import { APPCONFIG } from '../../config/config';
import FormWrapper from '../formWrapper';

const UpdateUser =()=> {
    const [tagid, setTagid] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surName, setSurname] = useState('');
    const [pin, setPin] = useState('');
    const [amount, setAmount] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState('');
    const [email, setEmail] = useState('');
    const [student, setStudent] = useState([])

    const handleSubmit =(e)=> {
        e.preventDefault();
    }

    let {id} = useParams();

    useEffect(()=> {
        fetchUser()
    },[])

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
            tagid: student.tagid,
            fname: student.fname,
            lname: student.lname,
            pin: student.pin,
            money: student.money,
            password: student.password,
            active: student.active,
            email: student.email
        });
    }

    

    return (
        <div>
            <h1>Update Student Page</h1>
            <div>
                <FormWrapper {...headline}>
                <form onSubmit={handleSubmit}>
                    <FormInput
                    name="tagid"
                    type="text"
                    value={student.tagid}
                    handleChange={e => setTagid(e.target.value)}
                    />
                    <FormInput
                    name="firstname"
                    type="text"
                    placeholder="Fname"
                    value={student.fname}
                    handleChange={e => setFirstName(e.target.value)}
                    />
                    <FormInput
                    name="surname"
                    type="text"
                    placeholder="Lname"
                    value={student.lname}
                    handleChange={e => setSurname(e.target.value)}
                    />
                    <FormInput
                    name="pin"
                    type="text"
                    placeholder="Pin"
                    value={student.pin}
                    handleChange={e => setPin(e.target.value)}
                    />
                    <FormInput
                    name="amount"
                    type="text"
                    placeholder="Money"
                    value={student.money}
                    handleChange={e => setAmount(e.target.value)}
                    />
                    <FormInput
                    name="password"
                    type="text"
                    placeholder="Password"
                    value={student.password}
                    handleChange={e => setPassword(e.target.value)}
                    />
                    <FormInput
                    name="active"
                    type="text"
                    placeholder="Active"
                    value={student.active}
                    handleChange={e => setActive(e.target.value)}
                    />
                    <FormInput
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={student.email}
                    handleChange={e => setEmail(e.target.value)}
                    />
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
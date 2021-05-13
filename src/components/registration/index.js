import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormInput from './../forms/FornInput/formInput'
import Button from './../forms/Buttons'
import './index.scss'
import FormWrapper from '../formWrapper';
import {APPCONFIG} from './../../config/config';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper, makeStyles
  } from '@material-ui/core';
import Modal from './../modal'
import { Helmet } from 'react-helmet';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import FormSelect from '../forms/FormSelect';
import { Link, useHistory } from 'react-router-dom';

const Registration =(props)=> {

    const [tagid, setTagid] = useState("")
    const [firstName, setFirstName] = useState("")
    const [surName, setSurname] = useState("");
    const [pin, setPin] = useState("");
    const [money, setMoney] = useState("")
    const [password, setPassword] = useState("");
    const [active, setActive] = useState("")
    const [email, setEmail] = useState("");
    const [search, setSearch] = useState("");

    const [errors, setErrors] = useState([]);
    const [students, setStudents] = useState([]);

    const [hideModal, setHideModal] = useState(true);

    const toggleModal =()=> setHideModal(!hideModal);
    const history = useHistory();

    const configModal = {
        hideModal,
        toggleModal
    }

    let oldlist = students.map(students => {
        return {tagid: students.tagid, firstName: students.fname, total: students.transactionno,
            surName: students.lname, pin: students.pin, money: students.money, 
            password: students.password, active: students.active, email: students.email};
    });

    const handleClick =(id)=> {
        history.push('/updateuser/'+id)
    }

    const useStyles = makeStyles({
        table: {
        },
      });

      const stylesHead = {
        fontSize: '15px',
        cursor: 'pointer',
        width: '15%',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: '4px 4px'
      };

      const stylesBody = {
        fontSize: '13px',
        cursor: 'pointer',
        width: '15%',
        fontWeight: '400',
        padding: '4px 4px'
      };

    const configMod = {
        head: 'New Student Registeration'
    }
    const handleSubmitForm = event => {
        event.preventDefault();
        reset();
    }

    const reset =()=> {
        setTagid('');
        setFirstName('');
        setSurname('');
        setPin('');
        setMoney('');
        setPassword('');
    }

    useEffect(()=> {
        fetchStudents()
    },[]);


    const fetchStudents =()=> {
        const header = {
            "Content-Type" : 'application/json',
            Authorisation : "Bearer 111",
            "Access-Control-Allow-Origin" : "*"
        }

        axios.get(`${APPCONFIG.appapi}/fetchstudents`, {
            header
        })
        .then((data)=> {
            setStudents(data.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    const register =()=> {
        axios.post("http://localhost:8000/register", {
            tagid: tagid,
            fname: firstName,
            lname: surName,
            pin: pin,
            money: money,
            password: password,
            active: active,
            email: email
        })
        window.location.replace('http://localhost:3000/register')
        .then((response) => {
            console.log(response)
        })
        
        
    }

    return (
        <div>
            <Helmet>
                  <title>TAS Smart Card | Registration Page</title>
               </Helmet>
               <h1>Students Page</h1>
            <div className="reg">
                <span className="reg-span">
                    <ul>
                        <li>
                            <Button onClick={()=> toggleModal()}>
                                Add new user
                            </Button>
                        </li>
                    </ul>
                </span>
                <span>
                    <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="All Users XLS"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                </span>
            </div>
            <div >
                <FormInput
                name="search"
                value={search}
                placeholder="Search Bar"
                handleChange={e => {
                    if (e.target.value) {
                        const filteredTeams = students.filter(students => {
                          return students.fname.toLowerCase().includes(e.target.value.toLowerCase()) ||
                          students.lname.toLowerCase().includes(e.target.value.toLowerCase()) 
                        });
                        setStudents(filteredTeams);
                      } else {
                        setStudents(oldlist);
                      }
                      setSearch(e.target.value);
                  }}
                />
            </div>
            <div>
                <Modal {...configModal}>
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
                        
                        <label>TAG ID</label>
                        <FormInput 
                            type="text"
                            name="tagid"
                            value={tagid}
                            placeholder="Enter Tag ID"
                            handleChange={e=> setTagid(e.target.value)}
                        />
                        <label>Surname</label>
                        <FormInput 
                            type="text"
                            name="surName"
                            value={surName}
                            placeholder="Enter Surname"
                            handleChange={e=> setSurname(e.target.value)}
                        />
                        <label>Firstname</label>
                        <FormInput 
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="Enter Firstname"
                            handleChange={e=> setFirstName(e.target.value)}
                        />
                        <label>Pin: (4 digits) </label>
                        <FormInput 
                            type="number"
                            name="pin"
                            value={pin}
                            placeholder="Enter Pin"
                            handleChange={e=> setPin(e.target.value)}
                        />
                        <label>Money</label>
                        <FormInput 
                            type="text"
                            name="money"
                            value={money}
                            placeholder="Enter Amount"
                            handleChange={e=> setMoney(e.target.value)}
                        />
                        <label>Password</label>
                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter Password"
                            handleChange={e => setPassword(e.target.value)}
                        />
                        <label>Active</label>
                        <FormSelect 
                            options={[
                                {
                                    value: "active",
                                    name: "active"
                                },
                                {
                                    value: "1",
                                    name: "1"
                                },
                                {
                                    value: "2",
                                    name: "2"
                                }
                            ]}
                            handleChange={e => setActive(e.target.value)}
                        />
                        <label>User</label>

                        <FormSelect 
                            options={[
                                {
                                    value: "user",
                                    name: "user"
                                },
                                {
                                    value: "student",
                                    name: "Student"
                                },
                                {
                                    value: "staff",
                                    name: "Staff"
                                }
                            ]}
                            handleChange={e => setEmail(e.target.value)}
                        />

                        <Button onClick={register} type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            </FormWrapper>
            </Modal>
        </div>
        <div>
        <TableContainer component={Paper}>
                    <Table id="table-to-xls" className={useStyles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}>ID</TableCell>
                                <TableCell style={stylesHead}>TAG ID</TableCell>
                                <TableCell style={stylesHead}>Firstname</TableCell>
                                <TableCell style={stylesHead}>Lastname</TableCell>
                                <TableCell style={stylesHead}>Pin</TableCell>
                                <TableCell style={stylesHead}>Total Trans</TableCell>
                                <TableCell style={stylesHead}>Balance</TableCell>
                                <TableCell style={stylesHead}>Password</TableCell>
                                <TableCell style={stylesHead}>Active</TableCell>
                                <TableCell style={stylesHead}>Email</TableCell>
                                <TableCell style={stylesHead}>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((data, i) => {
                             return (
                                <TableRow key={i}>
                                    <TableCell style={stylesBody}>{data.id}</TableCell>
                                    <TableCell style={stylesBody}>{data.tagid}</TableCell>
                                    <TableCell style={stylesBody}>{data.fname}</TableCell>
                                    <TableCell style={stylesBody}>{data.lname}</TableCell>
                                    <TableCell style={stylesBody}>{data.pin}</TableCell>
                                    <TableCell style={stylesBody}>{data.transactionno}</TableCell>
                                    <TableCell style={stylesBody}>{data.money}</TableCell>
                                    <TableCell style={stylesBody}>{data.password}</TableCell>
                                    <TableCell style={stylesBody}>{data.active}</TableCell>
                                    <TableCell style={stylesBody}>{data.email}</TableCell>
                                    <TableCell style={stylesBody}><div className="update">
                                        <ul>
                                            <li onClick={()=> {
                                                handleClick(data.id)
                                            }}>
                                                Update
                                            </li>
                                        </ul>
                                        </div></TableCell>
                                </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
        
        
    )
}

export default Registration;
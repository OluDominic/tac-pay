import React from 'react';
import Header from './../../components/header'
import Footer from './../../components/footer'
import View from './../../components/View'
import { Link } from 'react-router-dom'

const AdminLay =(props)=> {
    

    return (
        <div style={{background: "white"}} className="tacAdminLay">
            <Header {...props} />
            <div className="tacControl">
                <div className="controlLay">
                    <View>
                        <ul>
                            <li>
                                <Link to="/deposit">
                                    Deposit/ Balance
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/usertransaction">
                                    User Transaction History
                                </Link>
                            </li>
                            <li>
                                <Link to="/deposithistory">
                                    User Deposit History
                                </Link>
                            </li>
                            <li>
                                <Link to="/transaction">
                                    All Transaction History
                                </Link>
                            </li>
                            <li>
                                <Link to="/payment">
                                    All Payment History
                                </Link>
                            </li>
                            <li>
                                <Link to="/register">
                                    Students
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/userdetails">
                                    User Details
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/delete">
                                    Delete User
                                </Link>
                            </li>
                        </ul>
                    </View>
                </div>
                <div className="layerContent">
                    {props.children}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default AdminLay;
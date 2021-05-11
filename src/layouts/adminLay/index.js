import React from 'react';
import Header from './../../components/header'
import Footer from './../../components/footer'
import View from './../../components/View'
import { Link } from 'react-router-dom'

const AdminLay =(props)=> {
    

    return (
        <div className="tacAdminLay">
            <Header {...props} />
            <div className="tacControl">
                <div className="controlLay">
                    <View>
                        <ul>
                            <li>
                                <Link to="/deposit">
                                    Deposit
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/usertransaction">
                                    My Transaction
                                </Link>
                            </li>
                            <li>
                                <Link to="/deposithistory">
                                    User Deposit History
                                </Link>
                            </li>
                            <li>
                                <Link to="/transaction">
                                    Transaction History
                                </Link>
                            </li>
                            <li>
                                <Link to="/payment">
                                    Payment History
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/delete">
                                    Delete User
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/register">
                                    Register
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
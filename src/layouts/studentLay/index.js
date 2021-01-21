import React from 'react';
import Header from './../../components/header'
import Footer from './../../components/footer'
import View from './../../components/View'
import { Link } from 'react-router-dom'

const StudentLay =(props)=> {

    return (
        <div className="tacStuLay">
            <Header {...props}/>
            <div className="tacControl">
                <div className="controlLay">
                    <View>
                        <ul>
                            <li>
                                <Link to="/profile">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </View>
                </div>
                <div className="layerContent">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default StudentLay;
import React from 'react'
import Header from './../../components/header'
import Footer from './../../components/footer'

const MainLay =(props)=> {
    return (
        <div>
            <Header/>
            <div className="main">
            {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLay;
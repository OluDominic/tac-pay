import React from 'react'
import LoginBackground from './../../Poketmoni.jpg'
import Header from './../../components/header'
import Footer from './../../components/footer'

const MainLay =(props)=> {
    return (
        <div style={{
            backgroundImage: `url(${LoginBackground})`,
            
        }}>
            <Header/>
            <div className="main">
            {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLay;
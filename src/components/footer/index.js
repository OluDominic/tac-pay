import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer =()=> {
    return (
        <footer className="footer">
            <div className="footwrap">
               <span>
                   <FontAwesomeIcon icon={faCopyright}/>
                   </span> Poketmoni 2022 
            </div>
        </footer>
    )
}

export default Footer;
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer =(props)=> {
    return (
        <footer className="footer">
            <div className="footwrap">
               <span>
                   <FontAwesomeIcon icon={faCopyright}/>
                   </span> The Ambassadors Schools 2021 
            </div>
        </footer>
    )
}

export default Footer;
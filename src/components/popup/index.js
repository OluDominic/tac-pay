import React from 'react';
import './index.scss';

const Popup =(props)=> {

    return (
        <div>
            <div>
                <span onClick={props.handleClose}>X</span>
                {props.content}
            </div>
        </div>
    );
}

export default Popup;

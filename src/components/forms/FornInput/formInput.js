import React from 'react';
import './formInput.scss';

const FormInput =({ label, handleChange, ...otherProps}) => {

    return (
        <div className="formInput">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="formIn" onChange={handleChange} {...otherProps}/>
        </div>
    )
}

export default FormInput;
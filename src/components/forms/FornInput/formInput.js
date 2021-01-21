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

            <input onChange={handleChange} className="formIn" {...otherProps}/>
        </div>
    )
}

export default FormInput;
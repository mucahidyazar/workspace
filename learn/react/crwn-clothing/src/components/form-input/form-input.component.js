import React from 'react';
import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input 
        type="text" 
        className="form-input" 
        onChange={handleChange} {...otherProps} 
        />

        
        {
            label ? 
            <label className={`${otherProps.value.length} ? 'shrink' : ''} form-input-label `}> 
                {label}
            </label>
            : null
        }

    </div>
)

export default FormInput;

//Yani burada diyoruz ki label her zaman form-input-label class ina sahip olacak ama SHRINK class ina sadece yazdigi zaman aktif olacak
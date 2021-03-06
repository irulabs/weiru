import React from 'react';

const Input = ({ inputType, label, name, value, handleInput, placeholder, width }) => {
    const inputStyle = "bb outline-0 bw1 br-0 bl-0 bt-0 b--yellow bg-dark-pink white pv2"
    return (
        <div className={`flex flex-column white mb4 ${width}`}>
            <label htmlFor={label} className="f7 mb2 b"> { label } </label>
            { inputType === 'input' ?
            <input
                className={ `${inputStyle}`}
                id={label}
                name={ name }
                value={ value }
                placeholder={ placeholder }
                onChange={(e) => { handleInput(label, e.target.value) }} />
            :
            <textarea
                className={`text-area overflow-hidden outline-0 ${inputStyle}`}
                id={label}
                name={ name }
                value={value}
                placeholder={placeholder}
                onChange={(e) => { handleInput(label, e.target.value) }} />
            }
        </div>
    )
}

export default Input;

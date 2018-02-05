import React from 'react';

const Input = ({ inputType, label, value, handleInput, placeholder, width }) => {
    const inputStyle = "bb outline-0 bw1 br-0 bl-0 bt-0 b--white bg-black white pv2"
    return (
        <div className={`flex flex-column white mb4 ${width}`}>
            <label htmlFor={label} className="f7 mb2"> { label } </label>
            { inputType === 'input' ?
            <input
                className={ `${inputStyle}`}
                id={label}
                value={ value }
                placeholder={ placeholder }
                onChange={(e) => { handleInput(label, e.target.value) }} />
            :
            <textarea
                className={`text-area overflow-hidden ${inputStyle}`}
                id={label}
                value={value}
                placeholder={placeholder}
                onChange={(e) => { handleInput(label, e.target.value) }} />
            }
        </div>
    )
}

export default Input;
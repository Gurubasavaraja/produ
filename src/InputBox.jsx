import React from 'react';

const InputBox = ({ label, change }) => {
    var handleChange = (e) => {
        change(e)
    }
    return (
        <div>
            {label}:<input onChange={handleChange} name={label} />
        </div>
    );
};

export default InputBox;
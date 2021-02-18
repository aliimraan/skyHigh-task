import React from 'react'

function Inputs({type,placeholder,onChange,name}) {
    return (
        <div>
            <input type={type} placeholder={placeholder} name={name} onChange={onChange}/>
        </div>
    )
}

export default Inputs

import React from 'react'

import './Button.css'

export default ({children, funcClick}) => {
    return(
        <button className='button-add' onClick={funcClick}>
            {children}
        </button>
    )
}
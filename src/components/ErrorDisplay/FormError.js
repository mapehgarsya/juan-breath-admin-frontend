import React from 'react';

export const FormError = ({ errorMessages, field, replaceControl }) => {
    return(
        errorMessages.map((message, i) => {
            if(message.includes(field)) {
                return (
                    <p className='form-error-display' key={i}>{message.replace(`"${field}"`, replaceControl)}</p>
                )
            } else {
                return <p></p>
            }
        })
    )
}
import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        //document.querySelector('input').select();
        //console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <div>
        <h1>Focus Screen</h1>
        <hr />

        <input
            ref={ inputRef }
            type='text'
            placeholder='Introduce tu nombre'
            className='form-control'
        />

        <button
            className='btn btn-primary mt-2'
            onClick={ onClick }
        >
            Set Focus
        </button>
    </div>
  )
}

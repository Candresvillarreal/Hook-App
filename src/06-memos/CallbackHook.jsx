import React, { useState, useCallback, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //useCallback memoriza una función que sólo se ejecuta cuando se produce algún cambio

    const incrementV =useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    );

    useEffect(() => {

    }, [ incrementV ]);
    
    // const incrementV = () => {
    //     setCounter( counter + 1);
    // }

  return (
    <div>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={ incrementV }/>
    </div>
  )
}

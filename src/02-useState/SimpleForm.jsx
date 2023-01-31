import React, { useState, useEffect } from 'react';
import { Message } from './Message';
import 'bootstrap/dist/css/bootstrap.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Carlos',
        email: 'carlos@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const {value, name } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
    //   console.log('useEffect called');
    }, []);

    useEffect(() => {
    //   console.log('formState changed');
    }, [formState]);

    useEffect(() => {
    //   console.log('email changed');
    }, [email]);
    
    

  return (
    <div>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type='text'
            className='form-control'
            placeholder='User Name'
            name='username'
            value={ username }
            onChange= { onInputChange }
        />

        

        {
            (username === 'Carlos') && <Message />
        }

    </div>
  )
}

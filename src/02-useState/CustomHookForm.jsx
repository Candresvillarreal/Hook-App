import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import 'bootstrap/dist/css/bootstrap.css';

export const CustomHookForm = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
      username: '',
      email: '',
      password: '',
    });

    //const { username, email, password } = formState;
    
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

        <input 
            type='email'
            className='form-control mt-2'
            placeholder='E-mail'
            name='email'
            value={ email }
            onChange={ onInputChange }
        />

        <input 
            type='password'
            className='form-control mt-2'
            placeholder='Password'
            name='password'
            value={ password }
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className='btn btn-primary mt-2'>Reset</button>


    </div>
  )
}

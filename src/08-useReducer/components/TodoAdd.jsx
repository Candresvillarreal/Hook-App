import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <div>
        <form onSubmit={ onFormSubmit }>
            <input
                type='text'
                placeholder='¿What do you want to do?'
                className='form-control'
                name='description'
                value={ description }
                onChange={ onInputChange }
            />
            <button 
                type='submit' 
                className='btn btn-outline-primary mt-1'
            >
                Add
            </button>
        </form>
    </div>
  )
}

import React from 'react';
import { useFetch, useCounter } from '../hooks';
import 'bootstrap/dist/css/bootstrap.css';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter();

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    //console.log({ data, isLoading, hasError });

    //si la data tiene un valor (!!data)

    const { author, quote } = !!data && data[length];

  return (
    <div>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        {
            (isLoading)
            ? <LoadingQuote />
            : <Quote author={author} quote={quote}/>
        }
        <div className='text-center'>
            <button 
                disabled= { isLoading }
                onClick={ () => increment() } 
                className='btn btn-primary'>
                Add Quote
            </button>
        </div>
        
        
    </div>
  )
}

import React from 'react'
import { MultipleCustomHooks } from './MultipleCustomHooks';

export const Quote = ({ author, quote }) => {

  return (
    <blockquote className='blockquote text-center'>
        {/*<p className='mb-1'>{ data[0].quote }</p>
        <p/>
        <footer className='blockquote-footer'>{ data[0].author }</footer>*/}
        <p className='mb-1'>{ quote }</p>
        <p/>
        <footer className='blockquote-footer'>{ author }</footer>
    </blockquote>
  )
}

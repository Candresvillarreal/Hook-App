import React, { useRef, useLayoutEffect, useState } from 'react'

export const Quote = ({ author, quote }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { width, height } = ( pRef.current.getBoundingClientRect() );
    setBoxSize({ width, height })
  }, [quote])

  return (
    <div>
      <blockquote className='blockquote text-end' style={{ display: 'flex' }}>
          {/*<p className='mb-1'>{ data[0].quote }</p>
          <p/>
          <footer className='blockquote-footer'>{ data[0].author }</footer>*/}
          <p ref={ pRef } className='mb-1'>{ quote }</p>
          <p/>
          <footer className='blockquote-footer'>{ author }</footer>
      </blockquote>

      <code>{ JSON.stringify( boxSize) }</code>
    </div>
  )
}

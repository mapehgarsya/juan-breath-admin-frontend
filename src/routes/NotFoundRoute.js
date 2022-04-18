import React from 'react';
import './routes.css'
import ErrorArt from '../media/404Error.svg'

export default function NotFoundRoute() {
  return (
    <div className='page-not-found-cont'>
      <img src={ErrorArt} className='error-art' alt='404 Error Page Not Found'/>
      <h2>Error 404 Page Not found</h2>
      <p>Please return to the previous page.</p>
      <a href='/'>
        <button className='primaryBtn'>Go Back</button>
      </a>
    </div>
  )
}

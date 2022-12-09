import React from 'react';
import Nav from './Nav';


export default function Layout({ children }) {
    return (
      <div className='relative'>
        <div className="absolute top-0 left-0"><Nav /></div>
        
        <main>{children}</main>
        
      </div>
    )
  }
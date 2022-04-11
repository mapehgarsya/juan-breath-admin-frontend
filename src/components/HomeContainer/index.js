import React from 'react';
import HomeNav from '../HomeNav';
import Sidebar from '../SideBar';

export default function HomeContainer (props) {
  return (
    <div className='customContainer '>
        <div className='homeWrapper'>
            <Sidebar />
            <div className='navAndContentDiv'>
                <HomeNav />
                <div className='contentWrapper'>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    
  )
}


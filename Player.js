import React from 'react'
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({ spotify }) {
    return (
        <div className='player'>
            <div className='palyer__body'>

                <Sidebar />
                <Body />
            </div>
            <Footer />
            {/* footer */}
        </div>
    )
}

export default Player

import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
    return(
        <div className='header'>
            <Link to='/'><h1><span className='color1'>Reddit</span> <span className='color2'>Compact</span></h1></Link>
        </div>
    )
}
import React from 'react';
import './styles/Header.css'
import logoIcon from '../../assets/images/logoIcon.png'

export default function Header() {
    
    return (
        <div className='header'>
            <div className='headerProgressBar'></div>
            <div className='headerList'>
                <div className='headerLogo'>
                    <img src={logoIcon} alt="logoIcon" className='logoIconImg' />
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import './styles/MoreHeader.css'
import logoIcon from '../../assets/images/logoIcon.png'
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const main = () => {
        navigate("/MyPortfolio")
    } 
    
    return (
        <div className='header'>
            <div className='headerList'>
                <div className='headerLogo'>
                    <button onClick={main} className='headerButton'>
                        <img src={logoIcon} alt="logoIcon" className='logoIconImg' />
                    </button>
                </div>
            </div>
        </div>
    )
}
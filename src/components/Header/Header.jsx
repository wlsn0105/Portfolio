import React from 'react';
import './styles/Header.css'
import logoIcon from '../../assets/images/logoIcon.png'
import { Link } from 'react-scroll';
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
                <div className='headerMenu'>
                    <ul className='headerMenuContainer'>
                        <li className='headerMenuText'>
                            <Link to='section1' smooth={true} duration={850} offset={-95} className='menuLink'>
                                ABOUT ME
                            </Link>
                        </li>
                        <li className='headerMenuText'>
                            <Link to='section2' smooth={true} duration={850} offset={-95} className='menuLink'>
                                PROJECT
                            </Link>
                        </li>
                        <li className='headerMenuText'>
                            <Link to='section3' smooth={true} duration={850} offset={-95} className='menuLink'>
                                CONTACT
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
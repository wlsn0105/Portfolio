import './styles/Header.css'
import logoIcon from '../../assets/images/logoIcon.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='headerList'>
                <div className='headerLogo'>
                    <img src={logoIcon} alt="logoIcon" className='logoIconImg' />
                </div>
                <div className='headerMenu'>
                    <ul className='headerMenuContainer'>
                        <li className='headerMenuText'>ABOUT</li>
                        <li className='headerMenuText'>ABOUT</li>
                        <li className='headerMenuText'>ABOUT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
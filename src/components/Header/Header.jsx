import './styles/Header.css'
import mimoticon from '../../assets/images/mimoticon.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='headerList'>
                <div className='headerLogo'>
                    <img src={mimoticon} alt="mimoticon" className='mimoticonImg' />
                    <h1>ZINU'S PORTFOLIO</h1>
                </div>
            </div>
        </div>
    )
}
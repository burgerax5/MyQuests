import { RxHome } from 'react-icons/rx'
import { PiScroll, PiSignOutBold, PiSignInBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="home">
                <Link to='/'>
                    <div className="logo">MyQuests</div>
                </Link>
            </div>
            <ul>
                <li className="quests">
                    <Link to='/quests'>
                        <PiScroll />
                    </Link>
                </li>
                <li className="login">
                    <Link to='/login'>
                        Sign In <PiSignInBold />
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
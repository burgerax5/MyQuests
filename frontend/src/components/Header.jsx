import { RxHome } from 'react-icons/rx'
import { useState } from 'react'
import { PiScroll, PiSignOutBold, PiSignInBold } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
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
                    {user ? (
                        <li className="logout">
                            <button className="logout-btn" onClick={onLogout}>
                                Logout <PiSignOutBold />
                            </button>
                        </li>) : (
                        <li className="login">
                            <Link to='/login'>
                                Sign In <PiSignInBold />
                            </Link>
                        </li>)
                    }
                </ul >
                <div className="hamburger-container" onClick={toggleMenu}>
                    <div className={`hamburger ${showMenu ? "close" : ""}`}></div>
                </div>
            </header >
            { showMenu && <div className="mobile-menu">
                <div className="mobile-nav-top">
                    <button>Close</button>
                </div>
                <div className="menu-list">
                    
                </div>
                <div className="menu-loginbox">

                </div>
            </div> }
        </>
    )
}

export default Header
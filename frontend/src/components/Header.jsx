import { RxHome } from 'react-icons/rx'
import { useState, useEffect } from 'react'
import { PiScroll, PiSignOutBold, PiSignInBold } from 'react-icons/pi'
import { IoMdClose } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

import QuestIcon from '../images/quest_icon.png'

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
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (screenWidth > 767) {
            setShowMenu(false)
        }
    }, [screenWidth])

    const handleResize = () => {
        setScreenWidth(window.innerWidth)
    }

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
                            <img src={QuestIcon}/>
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
            <div className={`mobile-menu ${ showMenu && "show" }`}>
                <div onClick={toggleMenu}>
                    <button className="menu-close">
                        <IoMdClose />
                    </button>
                </div>
                <div className="menu-list">
                    
                </div>
                <div className="menu-loginbox">

                </div>
            </div>
            { showMenu && <div className="overlay" onClick={toggleMenu}></div> }
        </>
    )
}

export default Header
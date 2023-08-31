import { FaHome, FaGear, FaQuestion, FaClock, FaExclamation, FaPlus, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <div className="logo">
            <Link to='/'></Link>
        </div>
    </div>
  )
}

export default Header
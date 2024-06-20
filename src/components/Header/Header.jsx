import { Link } from 'react-router-dom'    
import { CiUser } from "react-icons/ci";
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <div className='logo'>MovieApp</div>
            </Link>
            <div className="user-image">
                <CiUser width={'38px'} />  
            </div>
        </div>
    )
}

export default Header;
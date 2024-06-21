import { Link } from 'react-router-dom'    
import { CiUser } from "react-icons/ci"
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/Movies/MovieSlice'
import './Header.scss'

const Header = () => {
    const [term, setTerm] = useState('');
    const [section, setSection] = useState(false);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(term==='') return alert("Enter something"); 
            dispatch(fetchAsyncMovies(term));
            dispatch(fetchAsyncShows(term));
            setTerm('');
    }
    
    return (
        <div className="header">
            <Link to='/'>
                <div className='logo'>MovieApp</div>
            </Link>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Search here' value={term} onChange={(e) => setTerm(e.target.value)} />
                <button >Search</button>
            </form>
            <div className="" >
                 
            </div>
        </div>
    )
}

export default Header;
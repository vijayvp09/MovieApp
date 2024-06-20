import { useEffect } from 'react'
import { MovieListing } from '../../components'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/Movies/MovieSlice';


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {        
            dispatch(fetchAsyncMovies());
            dispatch(fetchAsyncShows());
    }, [dispatch]);
    return (
        <div className="">
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}

export default Home;
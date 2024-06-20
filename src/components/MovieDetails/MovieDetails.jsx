import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieOrShow, getSelectedShowOrMovie, removeShowOrMovie } from '../../features/Movies/MovieSlice'
import { FaStar } from "react-icons/fa"
import { FaThumbsUp } from "react-icons/fa"
import { PiFilmReelFill } from "react-icons/pi";
import { BsCalendarRangeFill } from "react-icons/bs"
import './MovieDetails.scss'

const MovieDetails = () => {
    const { imdbId } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedShowOrMovie);
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShow(imdbId));
        return () => dispatch(removeShowOrMovie())
    }, [dispatch, imdbId]);
    return(
        <div className="movie-section">
            {Object.keys(data).length === 0 ? (<div>Loading...</div>) : (<>
            <div className="section-left">
                <div className="movie-title">{data.Title}</div>
                <div className="movie-rating">
                    <span>
                        IMDB Rating <FaStar className='star' style={{ color: '#ff9e00'}}/> : {data.imdbRating}
                    </span>
                    <span>
                        IMDB Votes <FaThumbsUp style={{ color: '#fafafa'}}/> : {data.imdbVotes}
                    </span>
                    <span>
                        Runtime <PiFilmReelFill style={{ color: 'rgb(191, 213, 214)'}}/> : {data.Runtime}
                    </span>
                    <span>
                        Year < BsCalendarRangeFill style={{ color: 'peachpuff'}}/> : {data.Year}
                    </span>
                </div>
                <div className='movie-plot'>{data.Plot}</div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title} loading='lazy' />
            </div>
            </>)}
        </div>
    );
};

export default MovieDetails;
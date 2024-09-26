import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './MovieReviews.css'; 

function MovieReviews() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 

    useEffect(() => {
        const fetchMovieReviews = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/movies/${id}`);
                setMovie(response.data);
                setIsLoaded(true);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieReviews();
    }, [id]);

    if (!movie) return <h2>Loading...</h2>;

    return (
        <div 
            className="movie-background" 
            style={{ backgroundImage: `url(${movie.bgimg})` }}
        >
            <div className="movie-details">
                <h1>{movie.title}</h1>
                <p><span className='rev'>Rating:</span> {movie.rating}</p>
                <p><span className='rev'>Release Date:</span> {movie.releaseDate}</p>
                <p><span className='rev'>Genre:</span> {movie.genre}</p>
                <div className="review"> <div className="mythoughts">My Thougths:</div>{movie.myreview}</div>
                <Link to="/movies"><button className='homebtn'>Back to Home</button></Link>
            </div>

        </div>
    );
}

export default MovieReviews;

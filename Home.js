import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom'; 
import "./Home.css";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <div className="header">
                <h1>D's Movie Corner</h1>
                <Link to="/logout"><button className='logoutbtn'>Logout</button></Link>
            </div>
            <div className="movie-container">
                {movies.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-item">
                        <img src={movie.image} alt={movie.title} />
                        <h4>{movie.title}</h4>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;

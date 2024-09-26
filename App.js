import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';  
import MovieReviews from './MovieReviews'; 
import Logout from './Logout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/logout" element={<Logout />} />
                <Route path="/movies" element={<Home />} />
                <Route path="/movies/:id" element={<MovieReviews />} />  
            </Routes>
        </Router>
    );
}

export default App;

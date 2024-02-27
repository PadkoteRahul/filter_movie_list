import {React, useEffect, useState} from 'react'
// import {useState} from 'react'
//42d536bc
import './App.css';
import searchIcon from  './search.svg';
import MovieCard from './MovieCard';
const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const API_URL = 'http://www.omdbapi.com?apikey=42d536bc'

        const searchMovies = async () => {
            const response = await fetch(`${API_URL}&s={title}`)
            const data = await response.json()
            setMovies(data.Search)
        }

        useEffect(()=>{
            searchMovies('Batman')
        },[])

    // const movie1 ={
    //     "Title": "Spiderman the Verse",
    //     "Year": "2019–",
    //     "imdbID": "tt12122034",
    //     "Type": "series",
    //     "Poster": "https://m.edia-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
    // }

    return(
        <div className='app'>
            <h1>Movie_Land</h1>
            <div className='search'>
                <input 
                placeholder = "Enter Movie Name"
                value = {searchTerm}
                onChange = {(e) => { setSearchTerm(e.target.value)}}
                />
                <img 
                src = {searchIcon}
                onClick = {() => {searchMovies(searchTerm)}}
                />
            </div>
            {movies?.length > 0
                ? ( <div className = "container">
                        {movies.map((movie) =>(
                        <MovieCard movie1 = {movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h1>no movies found</h1>
                    </div> 
                )}
        </div>
    );
};
export default App;
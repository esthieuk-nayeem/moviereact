import {useEffect, useState} from "react";
import './App.css'; 
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";


//9025baaf

const API_URL =  'http://www.omdbapi.com/?i=tt3896198&apikey=9025baaf'


// const movie1 = {
    
//          "Title": "Batman v Superman: Dawn of Justice",
//          "Year": "2016",
//         "imdbID": "tt2975590",
//         "Type": "movie",
//         "Poster": "N/A"
    
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovies = async (title) => {
        const responce = await fetch(`${API_URL}&s=${title}`);
        const data = await responce.json();
        setMovies(data.Search);
    }
 

    useEffect(()=> {
        searchMovies('superman');
    }, []  );

    

    return (     
        
        <div className="app"> 
           <h1>MovieLand</h1>


           <div className="search" > 
                <input placeholder="search for movies "
                value= {search}
                onChange={(e) => setSearch(e.target.value) } 
                />
                <img
                src = {SearchIcon}
                alt = "search" 
                onClick={() => searchMovies(search)}
                />
            </div>

           {
            movies?.length > 0
            ? (
                <div className="container">
                    
                    {movies.map((movie) => (
                    <MovieCard movie={movie} />
                     ))}

                </div>

                ) : (
                        <div className="empty">
                            <h2>No movies found</h2> 
                        </div>
                    )
            }

            

        </div>

        
    )
}

export default App; 
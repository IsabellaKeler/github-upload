
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './favorites.css';
import{toast} from 'react-toastify';


export default function Favorites(){

    const[movies, setMovies]= useState([]);

    useEffect(()=> {

        const myList = localStorage.getItem('movies');
        setMovies(JSON.parse(myList) || []);


    }, []);

    function handleDelete(imdbID) {
        let filterMovies = movies.filter((item)=>{
            return(item.imdbID !== imdbID)

    })

    
    setMovies(filterMovies);
    localStorage.setItem('movies', JSON.stringify(filterMovies));
    toast.success('Movie Deleted');
    }
    return(
        <div id="my-movies">
            <h1>My Movies</h1>

            {movies.length === 0 && <span>There is no Movie Here :,(</span>}
            <ul>
                {movies.map((item)=>{
                    return(
                        <li key={item.Title}>
                            <span>{item.Title}</span>

                            <div>
                                <Link to={`/movies/${item.imdbID}`}>INFO</Link>
                                <button onClick={() => handleDelete (item.imdbID)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
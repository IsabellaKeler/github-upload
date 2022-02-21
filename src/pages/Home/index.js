import {useEffect, useState} from'react';
import './home.css';
import api from '../../services/api';
import {useParams, Link} from 'react-router-dom';


export default function Home(){
  const[movies, setMovies] = useState([]);
  
  useEffect(()=>{
    
    async function loadMovies(){
    
      const response = await api.get('https://www.omdbapi.com/?apikey=7eab9b15&s=harry+potter')
      console.log(response.data.Search);
      //inspect, console leu como data entao usamos response.data
      setMovies(response.data.Search);
    
    }

    loadMovies();
  
  }, []);
  return (
    <div className="container">
      <div className="list-movies">
        {movies.map((movie)=>{
          return(
            <article key={movie.imdbID}>
              <strong>{movie.Title}</strong>
              <img src={movie.Poster} alt={movie.Title}/>
              <Link to={`/movies/${movie.imdbID}`}>Access</Link> 
              
            </article>

          )
        })}
      </div>
    </div>
  );
}
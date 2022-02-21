import { useEffect, useState } from 'react';
import './movies-info.css';
import{useParams, useHistory} from 'react-router-dom';
import api from '../../services/api'
import{toast} from 'react-toastify';

export default function Movies(){
    const {imdbID}= useParams();
    const history = useHistory();

    const [movie, setMovies] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadMovies(){
            const response = await api.get(`?apikey=7eab9b15&i=${imdbID}`);
            
            // console.log(response.data);

            setMovies(response.data);
            setLoading(false);
        }

        loadMovies();
        return()=>{
            //desmontar apos a troca de pagina
            console.log('Desmontado');

        }
    }, [history, imdbID]);

    function saveMovies(){

        const myList = localStorage.getItem('movies');

        let savedMovies = JSON.parse(myList) || [];

        const hasMovies = savedMovies.some((savedMovie)=> savedMovie.imdbID === movie.imdbID);
         
        if(hasMovies){
            toast.error('This Movie is already saved.');
            
            return;
            //stop
        }

        savedMovies.push(movie);
        localStorage.setItem('movies', JSON.stringify(savedMovies));
        toast.success('Saved');




    }

    if(loading) {
        return(
        <div className="movies-info">
            <h1>Loading Movies...</h1>
        </div>
        )


    }
    return(
        <div className="movies-info">
            <h1>{movie.Title} </h1>
            <img src={movie.Poster} alt={movie.Title}/>

            <h1>Sinopse</h1>
            <article>{movie.Plot}</article>

            <div>
                <button onClick={saveMovies}>SAVE</button>
                <button>
                    <a target = "blank" href={`https://www.youtube.com/results?search_query=${movie.Title}Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}
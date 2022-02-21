import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link className="logo" to= "/">Movies</Link>
            <Link className="favorites" to= "/favorites">Saved</Link>
        </header>
    )
}
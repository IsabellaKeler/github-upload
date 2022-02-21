import{BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';

import Movies from './pages/Movies';

import Favorites from './pages/Favorites';

import Error from './pages/Error';


const Routes = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movies/:imdbID" component={Movies}/>
            <Route exact path="/favorites" component={Favorites}/>
            <Route path="*" component={Error}/>
        </Switch>
        </BrowserRouter>)
}
export default Routes;
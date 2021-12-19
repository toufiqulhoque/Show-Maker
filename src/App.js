import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import AuthProvider from './components/context/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AllMovies from './components/AllMovies/AllMovies';
import Discover from './components/Pages/Discover';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MovieReview from './components/MovieReview/MovieReview';
import { useSelector } from 'react-redux';
import WatchList from './components/WatchList/WatchList';
import Dashboard from './components/Dashboard/Dashboard';
import AddMovies from './components/AddMovies/AddMovies';


function App() {
  const movies = useSelector((state) => state.movies.watchList)
  const fullMovies = useSelector((state) => state.movies.discover)
  console.log(fullMovies);
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header data={movies}></Header>
          <Switch>

            <Route exact path='/' >
              <Home></Home>
            </Route>
            <Route exact path='/home' >
              <Home></Home>
            </Route>
            <Route exact path='/allMovies' >
              <Discover></Discover>
            </Route>
            <Route exact path='/watchList' >
              <WatchList data={movies} ></WatchList>
            </Route>
            <Route exact path='/services/:id' >
              <MovieDetail></MovieDetail>
            </Route>
            <Route exact path='/reviews' >
              <MovieReview></MovieReview>
            </Route>
            <Route exact path='/addMovies' >
              <AddMovies></AddMovies>
            </Route>
            <Route exact path='/dashboard' >
              <Dashboard></Dashboard>
            </Route>

            <Route exact path='/login' >
              <Login></Login>
            </Route>
            <Route exact path='/register' >
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;

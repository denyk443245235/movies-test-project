import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SearchBar from "material-ui-search-bar";
import MovieCard from '../movie-card/movie-card';
import authService from '../../api-services/auth';
import movieApiService from '../../api-services/movies'
import Typography from "@material-ui/core/Typography";
import Preloader from "../preloader";
import './dashboard.css';

const Dashboard = () => {
  const history = useHistory();
  const [errorVisible, setErrorVisible] = useState(false);
  const [textForSearch, setTextForSearch] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [userName, setUserName] = useState(null);

  useEffect(  () => {
    authService.isUserAuthorized()
      .then(({data}) => {
        if (!data) {
          history.push('/auth')
        } else {
          setUserName(data.name);
        }
      })
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const closeErrorModal = () => {
    setErrorVisible(false);
  };

  const getMovies = () => {
    movieApiService.getList(textForSearch)
      .then(list => {
        setMoviesList(list);
      })
      .catch(() => {
        setErrorVisible(true);
      });
  };
  
  if (!userName) {
    return <Preloader/>
  }

  return (
    <div className='dashboard-container'>
      <Typography variant="h6">
        Hello {userName} please type name of movie, and press Enter
      </Typography>
      <SearchBar
        onChange={setTextForSearch}
        onRequestSearch={getMovies}
        style={{
          maxWidth: 400,
          marginTop: 20
        }}
      />
      <div className='cards-container'>
        {moviesList.map(movie => (
          <MovieCard movie={movie} key={movie.imdbID}/>
        ))}
      </div>
      <Snackbar open={errorVisible} autoHideDuration={3000} onClose={closeErrorModal}>
         <Alert onClose={closeErrorModal} severity="error"> Movies not found! Please type more correct name</Alert>
      </Snackbar>
    </div>
  )
};

export default Dashboard;